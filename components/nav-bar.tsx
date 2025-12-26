"use client";
import React from "react";
import NavTab from "./nav-tab";
import Modal from "./modal";

type NavBarProps = {
  children?: React.ReactNode;
  authed: boolean;
  admin?: boolean;
};

export default function NavBar({ children, authed, admin }: NavBarProps) {
  const navList = (
    <span className="flex justify-right h-full bg-white">
      <NavTab title="Home" destination="/home" />
      {authed && <NavTab title="Directory" destination="/directory" />}
      {/**<NavTab title="Memories" destination="/memories" />*/}
      <NavTab title="Photo Gallery" destination="/gallery" />
      {authed && <NavTab title="Map" destination="/map" />}
      <NavTab title="In Memoriam" destination="/memoriam" />
    </span>
  );

  return (
    <div
      className="
    sticky top-0 z-[9998] w-full
    flex items-center gap-3
    bg-white shadow-md
    px-3 py-2 h-20
    md:px-4 md:py-3 md:h-20
  "
    >
      {/* Logo */}
      <img
        src="/placeholder.svg"
        alt="Logo"
        className="w-8 h-8 md:w-10 md:h-10 shrink-0"
      />

      {/* Title */}
      <span
        className="
      text-xs md:text-base
      font-medium truncate
      max-w-[40vw] md:max-w-none
      mr-5
    "
      >
        Richlands High School Class of 2013 Reunion
      </span>

      {/* Scrollable nav */}
      <div className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide min-w-30">
        <div className="flex items-center gap-2 h-15">{navList}</div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-x-2 md:gap-x-3 shrink-0">
        {children}
      </div>
    </div>
  );
}
