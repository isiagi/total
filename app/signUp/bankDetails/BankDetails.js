import React from "react";

function BankDetails() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-3 my-4">
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="number">
              Bank Name
            </label>
            <br />
            <input
              type="text"
              name="number"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="country">
              Bank Branch
            </label>
            <br />
            <input
              type="text"
              name="country"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 my-4">
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="number">
              Account Name
            </label>
            <br />
            <input
              type="text"
              name="number"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="country">
              Account Number
            </label>
            <br />
            <input
              type="text"
              name="country"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex-1 w-[50%]">
          <label className="text-slate-600" htmlFor="number">
            Account Name
          </label>
          <br />
          <input
            type="text"
            name="number"
            className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default BankDetails;
