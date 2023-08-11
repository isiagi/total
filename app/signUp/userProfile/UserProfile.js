import React from "react";

function UserProfile() {
  return (
    <div>
      <div className="flex flex-wrap gap-3 my-4">
        <div className="flex-1">
          <label className="text-slate-600" htmlFor="gender">
            Gender
          </label>
          <br />
          <select className="outline-none rounded mb-1 w-full py-[10px] bg-white border">
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="text-slate-600" htmlFor="birth">
            Date Of Birth
          </label>
          <br />
          <input
            type="text"
            name="birth"
            className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 my-4">
        <div className="flex-1">
          <label className="text-slate-600" htmlFor="number">
            Phone Number
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
            Country ID
          </label>
          <br />
          <input
            type="text"
            name="country"
            className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
