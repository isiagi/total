"use client";

import Intro from "@/components/Intro";
// import Select from "@/components/Select";
import React from "react";

import { BsBuildingFillLock } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function page() {
  return (
    <div>
      <Intro />
      <div className="flex flex-wrap md:px-12 py-12 px-0">
        <div className="shadow-xl p-8">
          <h2>Contact Us</h2>
          <form>
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="md:w-[270px] w-full px-4 py-2 text-[#64748b] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="md:w-[270px] w-full px-4 py-2 text-[#64748b] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="md:flex">
              <input
                type="email"
                placeholder="Email Here"
                className="md:w-[270px] w-full px-4 py-2 text-[#64748b] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />

              <Select className="md:w-[270px] w-full" options={options} />
            </div>
            <div className="md:flex">
              <Select className="md:w-[270px] w-full" options={options} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="md:w-[270px] w-full px-4 py-2 text-[#64748b] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <Select className="w-full" options={options} />
            <textarea
              name="message"
              id=""
              cols={30}
              rows={5}
              className="w-full border border-gray-300"
              placeholder="Enter your message"
            ></textarea>
            <button className="bg-[#489FAF] text-white p-4 font-bold">Submit</button>
          </form>
        </div>
        <div>
          <h3>TOTAL CARE EUROPE UNIPESSOAL LDA</h3>
          <div className="flex items-center">
            <BsBuildingFillLock />
            <h3 className="max-w-lg">
              AV. D. JOÃO II, N.º 50 - 4º PISO ED. MAR VERMELHO - PARQUE DAS
              NAÇÕES 1990-095 LISBOA, PORTUGAL
            </h3>
          </div>
          <hr />
          <div className="flex items-center">
            <BiSolidPhoneCall />
            <h3>+351937352378</h3>
          </div>
          <hr />
          <div className="flex items-center">
            <AiTwotoneMail />
            <h3>info@totalcareeurope.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
