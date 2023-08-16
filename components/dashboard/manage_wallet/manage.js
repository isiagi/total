"use client"
import { Select } from "antd";
import React from "react";

function manage() {
  return (
    <div className="bg-[#F1F5F9]">
      <div className="grid grid-cols-fluid gap-3">
        <div className="bg-white px-2">
          <h2>ADD FUND TO WALLET</h2>
          <label>Userid</label>
          <input
            type="text"
            className="outline-none border border-gray-300 w-full py-1 my-3"
          ></input>
          <label>Amount</label>
          <input
            type="text"
            className="outline-none border border-gray-300 w-full py-1 my-3"
          ></input>
          <label>Select wallet type</label>
          <Select className="outline-none w-full">
            <option>E Wallet</option>
          </Select>
          <label>Remarks</label>
          <input
            type="text"
            className="outline-none border border-gray-300 w-full py-1 my-3"
          ></input>
          <button className="w-fit bg-blue-700 text-white p-2 rounded">
            Submit
          </button>
        </div>
        <div className="bg-white px-2">
        <h2>DEDUCT FUND FROM WALLET</h2>
          <label>Userid</label>
          <input
            type="text"
            className="outline-none border border-gray-300 w-full py-1 my-3"
          ></input>
          <label>Amount</label>
          <input
            type="text"
            className="outline-none border border-gray-300 w-full py-1 my-3"
          ></input>
          <label>Select wallet type</label>
          <Select className="outline-none w-full">
            <option>E Wallet</option>
          </Select>
          <label>Remarks</label>
          <input
            type="text"
            className="outline-none border border-gray-300 w-full py-1 my-3"
          ></input>
          <button className="w-fit bg-blue-700 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default manage;
