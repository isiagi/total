import React from "react";
import { FaPuzzlePiece } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";

function Banners() {
  return (
    <div className="grid grid-cols-fluid gap-5 py-16">
      <div className="text-center flex flex-col p-16 items-center cursor-pointer shadow-2xl">
        <FaPuzzlePiece className="text-[#489FAF] text-5xl" />
        <h2 className="font-medium pt-5 text-slate-700">VISION & OBJECTIVES</h2>
      </div>
      <div className="text-center flex flex-col p-16 items-center cursor-pointer shadow-2xl">
        <GoGoal className="text-[#489FAF] text-5xl" />
        <h2 className="font-medium pt-5 text-slate-700">VALUES</h2>
      </div>
      <div className="text-center flex flex-col p-16 items-center cursor-pointer shadow-2xl">
        <MdOutlineSupportAgent className="text-[#489FAF] text-5xl" />
        <h2 className="font-medium pt-5 text-slate-700">24/7 LIVE SUPPORT</h2>
      </div>
    </div>
  );
}

export default Banners;
