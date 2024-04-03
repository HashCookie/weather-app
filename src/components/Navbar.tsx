import React from "react";
import { PiSunLight } from "react-icons/pi";
import { TbCurrentLocation } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";
import SearchBox from "./SearchBox";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <PiSunLight className="text-3xl mt-1 text-yellow-300" />
        </div>
        <section className="flex gap-2 items-center">
          <TbCurrentLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <TfiLocationPin className="text-2xl hover:opacity-80 cursor-pointer" />
          <p className="text-slate-900/80 text-sm">China</p>
          <div>
            <SearchBox />
          </div>
        </section>
      </div>
    </nav>
  );
}
