"use client";

import Intro from "@/components/Intro";
import Image from "next/image";
import benefit from "@/public/product2.png";

import { useState } from "react";

const firstArray = [1];
const secondArray = [1, 2];
const thirdArray = [1, 2, 3];

function Page() {
  const [data, setData] = useState(firstArray);

  return (
    <div>
      <Intro text="Products" />
      <div className="md:px-12 px-2 flex flex-wrap gap-10 py-12">
        <div className="md:w-fit w-full shadow-2xl h-fit p-6">
          <h2 className="text-[#F2B636] font-medium">PRODUCT CATEGORIES</h2>
          <hr />
          <p
            className="text-slate-600 py-2 hover:text-[#F2B636] cursor-pointer"
            onClick={() => setData(firstArray)}
          >
            Cosmetics and Personal care
          </p>
          <p
            className="text-slate-600 py-2 hover:text-[#F2B636] cursor-pointer"
            onClick={() => setData(secondArray)}
          >
            Health and wellness
          </p>
          <p
            className="text-slate-600 py-2 hover:text-[#F2B636] cursor-pointer"
            onClick={() => setData(thirdArray)}
          >
            HOME CARE
          </p>
        </div>
        <div className="flex gap-5 flex-wrap">
          {data.map((_, i) => (
            <div key={i} className="bg-[#F5F5F5] p-3 rounded">
              <div className="relative md:w-[200px] ">
                <Image
                  src={benefit}
                  alt=""
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div>
                <h3 className="text-center text-slate-600 py-2">2 TCM ORANGE</h3>
                <div className="flex justify-between text-[#C8695F] font-medium">
                  <h3>MDS:</h3>
                  <h3>200</h3>
                </div>
                <div className="flex justify-between text-[#C8695F] font-medium pb-2">
                  <h3>DP:</h3>
                  <h3>200</h3>
                </div>
              </div>
              <button className="bg-[#ed5353] border-4 border-[#ed5353] font-medium text-white w-full py-2 rounded hover:bg-transparent hover:text-slate-600 hover:border-4  hover:border-amber-500">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
