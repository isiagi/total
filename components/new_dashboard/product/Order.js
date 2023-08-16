"use client"

import { data } from "@/utils/data";
import Image from "next/image";
import React from "react";

import benefit from "@/public/product2.png";

function Order() {
  return (
    <div>
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
  );
}

export default Order;
