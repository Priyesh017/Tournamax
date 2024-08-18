"use client";
import Link from "next/link";
import Popup from "./PopUpA";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-2 border-slate-700 px-8 py-3 rounded">
      <Link className="text-gray-300 font-bold text-xl" href={"/todoList"}>
        Notes...
      </Link>
      <Popup />
    </nav>
  );
}
