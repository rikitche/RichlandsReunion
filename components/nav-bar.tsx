"use client";
import React from "react";
import NavTab from "./nav-tab";
import Modal from "./modal";

type NavBarProps = {
  children?: React.ReactNode;
};

export default function NavBar({ children }: NavBarProps) {
  const authed = true;

  const navList = (
    <span className="flex justify-center h-full bg-black">
      <NavTab title="Home" destination="/home" />
      <NavTab title="Directory" destination="/directory" />
      <NavTab title="Memories" destination="/memories" />
      <NavTab title="Photo Gallery" destination="/gallery" />
      {authed && <NavTab title="Map" destination="/map" />}
      <NavTab title="In Memoriam" destination="/memoriam" />
    </span>
  );

  return (
    <div className="gap-6 sticky top-0 fixed z-[9998] w-screen flex items-center bg-black px-4 py-3 shadow-md h-24">
      <img
        src={"/placeholder.svg"}
        alt={"Logo"}
        width={24}
        height={24}
        className="w-18 h-18"
      />
      <div className="flex items-center justify-center h-full">{navList}</div>
      <div className="flex ms-auto justify-end items-center gap-x-3">
        {children}
      </div>
    </div>
  );
}
