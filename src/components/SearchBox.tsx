import React from "react";
import { MdOutlineSearch } from "react-icons/md";

type Props = {};

export default function SearchBox({}: Props) {
  return (
    <form className="flex relative items-center h-10">
      <input
        type="text"
        placeholder="Search location"
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full"
      />
      <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full">
        <MdOutlineSearch />
      </button>
    </form>
  );
}
