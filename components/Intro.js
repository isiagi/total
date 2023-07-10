import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

function Intro() {
  return (
    <div className="bg-[url('https://totalcareeurope.com/webAssets/img/banner1.webp')] bg-cover bg-center h-[40vh] flex justify-center items-center">
      <div class="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50">
        <h2>ABOUT US</h2>
        <div>
          <h2 className="w-full flex font-medium">
            <Link href="/">
              <span className="flex items-center text-white">
                <FaHome /> HOME{" "}/
              </span>
            </Link>{" "}
             <span className="text-[#628C22]">ABOUT</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
