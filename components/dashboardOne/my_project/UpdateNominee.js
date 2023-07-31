import { Select } from "antd";
import React from "react";

function UpdateNominee() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <label htmlFor="name">Nominee Full Name:</label>
            <br />
            <input
              type="text"
              name="name"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="Gender">Gender</label>
            <br />
            <Select className="outline-none rounded mb-1 w-full">
              <option>Female</option>
              <option>Male</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <label htmlFor="date">Date Of Birth :</label>
            <br />
            <input
              type="date"
              name="date"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="relation">Relation:</label>
            <br />
            <input
              type="text"
              name="relation"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="name">Mobile Number:</label>
          <br />
          <input
            type="tel"
            name="email"
            className="border outline-none border-gray-300 py-1 rounded mb-1 md:w-[50%] w-full"
          />
        </div>
        <button className="bg-blue-400 text-white p-3 rounded">Proceed</button>
      </div>
    </div>
  );
}

export default UpdateNominee;
