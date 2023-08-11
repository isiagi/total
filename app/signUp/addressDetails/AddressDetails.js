import React from "react";

function AddressDetails() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-3 my-4">
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="number">
              State
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
              City
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
              Street Address1
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
              Street Address2
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
              Zip PostalCode
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
              CountryId
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
            Address Type
          </label>
          <br />
          <select className="outline-none rounded mb-1 w-full py-[10px] bg-white border">
            <option>BILLING</option>
            <option>SHIPPING</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default AddressDetails;
