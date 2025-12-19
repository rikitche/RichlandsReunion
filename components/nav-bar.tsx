"use client";
import React from "react";
import NavTab from "./nav-tab";
import Modal from "./modal";

type NavBarProps = {
  children?: React.ReactNode;
  authed: boolean;
};

export default function NavBar({ children, authed }: NavBarProps) {
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
    <div className="gap-6 sticky top-0 fixed z-[9998] w-screen flex items-center bg-white px-4 py-3 shadow-md h-20">
      <img
        src={"/placeholder.svg"}
        alt={"Logo"}
        width={24}
        height={24}
        className="w-18 h-18"
      />
      <span>Richlands Highschool Class of 2013 Reunion</span>
      <div className="ml-20 flex items-center justify-center h-full">
        {navList}
      </div>
      <div className="flex ms-auto justify-end items-center gap-x-3">
        {children}
      </div>
    </div>
  );
}
