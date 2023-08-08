import React from "react";

function SearchComponent({ name, show }) {
  return (
    <div className="flex justify-between items-center pb-5">
      <div>
        <h3 className="text-slate-600 text-lg font-medium border-l-4 border-blue-500 pl-2">
          {name}
        </h3>
      </div>
      {show && (
        <div className="flex gap-2">
          <input
            type="text"
            name=""
            id=""
            className="border outline-none border-gray-300 py-1"
            placeholder="Search..."
          />
          <input
            type="number"
            name=""
            id=""
            className="border outline-none border-gray-300 py-1 w-[50px]"
            defaultValue={10}
          />
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
