import React from "react";
import SearchComponent from "../searchComponent/SearchComponent";
import ButtonComponent from "@/components/button/Button";

function GenerateLink() {
  return (
    <div>
      <div>
        <SearchComponent name="Generate Referral Link" />
        <div>
          <div className="flex-1 my-3">
            <label className="text-slate-600" htmlFor="bank">
              New Users Email
            </label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1 my-3">
            <label className="text-slate-600" htmlFor="bank">
              Sponsor ID
            </label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1 my-3">
            <label className="text-slate-600" htmlFor="bank">
              Select Position
            </label>
            <br />
            <select className="outline-none rounded mb-1 w-full py-[10px] bg-white border">
              <option>Left</option>
              <option>Right</option>
            </select>
          </div>
        </div>
        <ButtonComponent name="Generate Link" backgroundColor={"blue"} />
      </div>
    </div>
  );
}

export default GenerateLink;
