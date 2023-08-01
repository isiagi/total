import React from "react";

function CreatePin() {
  return (
    <div className="flex justify-center w-full">
    <div className="md:w-[50%] w-[85%]">

      <div>
        <h1>CREATE E PIN</h1>
      </div>
      <div>
        <div>
          <h3>Package</h3>
          <select className="outline-none border border-gray-300 w-full py-2 my-3">
            <option>Hey</option>
            <option>Hello</option>
            <option>There</option>
          </select>
        </div>
        <div>
          <h3>No Of Pins</h3>
          <input type="number" className="outline-none border border-gray-300 w-full py-1 my-3" />
        </div>
        <div>
          <h3>User ID</h3>
          <input type="text" className="outline-none border border-gray-300 w-full py-1 my-3" />
        </div>
      </div>
      <button className="outline-none bg-blue-500 text-white p-2 mt-2 rounded">Submit</button>
    </div>
    </div>
  );
}

export default CreatePin;
