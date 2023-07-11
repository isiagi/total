import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

function Intro({text}) {
  return (
    <div className="bg-[url('https://totalcareeurope.com/webAssets/img/banner1.webp')] bg-cover bg-center h-[50vh] flex justify-center items-center">
      <div class="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50">
        <h2 className="font-medium text-white uppercase py-3 text-lg mt-12">{text}</h2>
        <div className="bg-[#000] p-4 opacity-75">
          <h2 className="w-full flex font-medium gap-2">
            <Link href="/">
              <span className="flex items-center text-white">
                <FaHome />{" "} HOME{" "}/
              </span>
            </Link>{" "}
             <span className="text-[#628C22]">{text}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
