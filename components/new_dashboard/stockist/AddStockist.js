import React from "react";
import SearchComponent from "../searchComponent/SearchComponent";
import ButtonComponent from "@/components/button/Button";

function AddStockist() {
  return (
    <div>
      <div>
        <SearchComponent name="Add Stockist" />
      </div>
      <div>
        <div className="flex flex-wrap gap-3 my-4">
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="holder">
              User
            </label>
            <br />
            <select className="outline-none rounded mb-1 w-full py-[10px] bg-white border">
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="bank">
              Name
            </label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 my-4">
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="holder">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="bank">
              Phone Number
            </label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex-1 md:w-[50%] w-[90%]">
          <label className="text-slate-600" htmlFor="bank">
            Phone Number
          </label>
          <br />
          <input
            type="text"
            name="bank"
            className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
          />
        </div>
        <div className="flex justify-end">
          <ButtonComponent name="Add" backgroundColor={"blue"} />
        </div>
      </div>
    </div>
  );
}

export default AddStockist;
