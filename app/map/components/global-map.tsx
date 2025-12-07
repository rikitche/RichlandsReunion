"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useEffect, useState } from "react";
import { supabase } from "@/hooks/supabase-client";
import L, { LatLngExpression, LeafletMouseEvent, PointTuple } from "leaflet";

//
// ------------------------------------
// Types
// ------------------------------------
export type Location = {
  user_id: string;
  latitude: number;
  longitude: number;
};

type UserLocationRow = {
  user_id: string;
  latitude: number;
  longitude: number;
};

//
// ------------------------------------
// Icons
// ------------------------------------
const iconSize: PointTuple = [20, 20];
const iconAnchor: PointTuple = [20, 20];
const popupAnchor: PointTuple = [0, -20];

const otherMarkerIcon = L.icon({
  iconUrl: "/wildcat-3.png",
  iconSize: [30, 30],
  iconAnchor,
  popupAnchor,
});

const myMarkerIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: iconAnchor,
  popupAnchor,
});

//
// ------------------------------------
// Component that handles map click
// ------------------------------------
function LocationSetter({
  isEditing,
  onSetLocation,
}: {
  isEditing: boolean;
  onSetLocation: (coords: { lat: number; lng: number }) => void;
}) {
  useMapEvents({
    click(e: LeafletMouseEvent) {
      if (!isEditing) return;
      onSetLocation(e.latlng);
    },
  });

  return null;
}

//
// ------------------------------------
// Main Map Component
// ------------------------------------
export default function GlobalMap() {
  const [mounted, setMounted] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [myLocation, setMyLocation] = useState<Location | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const mapCenter: LatLngExpression = [0, 0];

  //
  // Mount-only flag (Fixes React hydration + Leaflet)
  //
  useEffect(() => {
    setMounted(true);
  }, []);

  //
  // Load ALL locations
  //
  useEffect(() => {
    const loadLocations = async () => {
      const { data } = await supabase
        .from("user_locations")
        .select("user_id, latitude, longitude");

      setLocations(data || []);
    };

    loadLocations();
  }, []);

  //
  // Load MY location separately → prevents mixing icons
  //
  useEffect(() => {
    const loadMyLocation = async () => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) return;

      const { data } = await supabase
        .from("user_locations")
        .select("user_id, latitude, longitude")
        .eq("user_id", user.id)
        .single();

      if (data) {
        setMyLocation({
          user_id: data.user_id,
          latitude: data.latitude,
          longitude: data.longitude,
        });
      }
    };

    loadMyLocation();
  }, []);

  //
  // Realtime updates for ALL users
  //
  useEffect(() => {
    const channel = supabase
      .channel("user-locations-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "user_locations" },
        (payload) => {
          const row = (payload.new || payload.old) as UserLocationRow | null;
          if (!row) return;

          const updated: Location = {
            user_id: row.user_id,
            latitude: row.latitude,
            longitude: row.longitude,
          };

          // Update locations list
          setLocations((prev) => {
            if (payload.eventType === "DELETE") {
              return prev.filter((loc) => loc.user_id !== updated.user_id);
            }

            const exists = prev.some((loc) => loc.user_id === updated.user_id);

            return exists
              ? prev.map((loc) =>
                  loc.user_id === updated.user_id ? updated : loc
                )
              : [...prev, updated];
          });

          // If this update belongs to ME → update myLocation too
          if (myLocation?.user_id === updated.user_id) {
            setMyLocation(updated);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [myLocation]);

  //
  // Updates my marker + saves to Supabase
  //
  const handleSetLocation = async (coords: { lat: number; lng: number }) => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    const updated: Location = {
      user_id: user.id,
      latitude: coords.lat,
      longitude: coords.lng,
    };

    setMyLocation(updated);

    await supabase.from("user_locations").upsert({
      user_id: user.id,
      latitude: coords.lat,
      longitude: coords.lng,
      is_public: true,
    });
  };

  //
  // Avoid rendering before hydration
  //
  if (!mounted) return null;

  //
  // ------------------------------------
  // UI
  // ------------------------------------
  //
  return (
    <div className="relative w-full h-[600px]">
      {/* Edit mode button */}
      <button
        onClick={() => setIsEditing((prev) => !prev)}
        className={`absolute z-[1000] bottom-4 left-4 px-4 py-2 rounded-lg text-white shadow-lg cursor-pointer
          ${isEditing ? "bg-red-600" : "bg-rich-blue"}
        `}
      >
        {isEditing ? "Finish Editing" : "Edit My Location"}
      </button>

      <MapContainer
        center={mapCenter}
        minZoom={2}
        zoom={2}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <LocationSetter
          isEditing={isEditing}
          onSetLocation={handleSetLocation}
        />

        {/* All users EXCEPT me */}
        {locations
          .filter((loc) => loc.user_id !== myLocation?.user_id)
          .map((loc) => (
            <Marker
              key={loc.user_id}
              position={[loc.latitude, loc.longitude]}
              icon={otherMarkerIcon}
            />
          ))}

        {/* My marker */}
        {myLocation && (
          <Marker
            position={[myLocation.latitude, myLocation.longitude]}
            icon={myMarkerIcon}
          />
        )}
      </MapContainer>
    </div>
  );
}
