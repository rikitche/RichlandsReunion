"use client";
import { Typography } from "@material-tailwind/react";

export default function PageHeader() {
  return (
    <div className="w-full bg-charcoal shadow-lg">
      <div className="justify-center flex flex-col items-center">
        <Typography
          {...({} as any)}
          className="text-3xl text-white padding-6 py-4 font-bebas"
        >
          Richlands High School | Class of 2013
        </Typography>
      </div>
    </div>
  );
}
