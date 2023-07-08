import React from "react";
import { FaPuzzlePiece } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";

function Banners() {
  return (
    <div className="grid grid-cols-fluid gap-5 py-12">
      <div className="text-center flex flex-col p-16 items-center shadow-2xl">
        <FaPuzzlePiece className="text-[#489FAF] text-5xl" />
        <h2 className="font-bold">VISION & OBJECTIVES</h2>
      </div>
      <div className="text-center flex flex-col p-16 items-center shadow-2xl">
        <GoGoal className="text-[#489FAF] text-5xl" />
        <h2 className="font-bold">VALUES</h2>
      </div>
      <div className="text-center flex flex-col p-16 items-center shadow-2xl">
        <MdOutlineSupportAgent className="text-[#489FAF] text-5xl" />
        <h2 className="font-bold">24/7 LIVE SUPPORT</h2>
      </div>
    </div>
  );
}

export default Banners;
