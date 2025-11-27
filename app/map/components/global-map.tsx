"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { supabase } from "@/hooks/supabase-client";
import L, { LatLngExpression, LeafletMouseEvent, PointTuple } from "leaflet";

type Location = {
  user_id: string;
  latitude: number;
  longitude: number;
};

function LocationSetter({
  onSetLocation,
}: {
  onSetLocation: (coords: any) => void;
}) {
  useMapEvents({
    click(e: LeafletMouseEvent) {
      onSetLocation(e.latlng);
    },
  });
  return null;
}

const iconSize: PointTuple | undefined = [40, 40]; //sizeOfIcon
const iconAnchor: PointTuple | undefined = [20, 40]; // point of icon that is on the marker position
const popupAnchor: PointTuple | undefined = [0, -40]; // where popups open relative to icon

const markerIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  className: "rounded-full border-2 border-white shadow-lg",
});

const myMarkerIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: iconSize,
  iconAnchor: iconAnchor,
  popupAnchor: popupAnchor,
  className: "rounded-full border-2 border-white shadow-lg",
});

export default function GlobalMap() {
  const [mounted, setMounted] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [myLocation, setMyLocation] = useState<Location>();
  const center: LatLngExpression = [0, 0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const loadLocations = async () => {
      const { data } = await supabase
        .from("user_locations")
        .select("user_id, latitude, longitude");

      setLocations(data || []);
    };

    loadLocations();
  }, []);

  const handleSetLocation = async (latlng: any) => {
    setMyLocation({
      user_id: "",
      latitude: latlng.lat,
      longitude: latlng.lng,
    });

    const user = (await supabase.auth.getUser()).data.user;

    if (user) {
      await supabase.from("user_locations").upsert({
        user_id: user.id,
        latitude: latlng.lat,
        longitude: latlng.lng,
        is_public: true,
      });
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-[600px]">
      <MapContainer
        key="main-map"
        center={center}
        zoom={2}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationSetter onSetLocation={handleSetLocation} />

        {locations.map((loc) => (
          <Marker key={loc.user_id} position={[loc.latitude, loc.longitude]} />
        ))}

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
