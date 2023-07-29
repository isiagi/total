import React from "react";

function ChangePassword() {
  return (
    <div>
      <h2>CHANGE LOGIN PASSWORD</h2>
      <form>
        <div className="my-2">
          <label>{"Enter New Password"}</label>
          <input
            type="text"
            className="outline-none border border-gray-300 w-full py-1 my-3"
          ></input>
        </div>
        <div className="my-2">
          <label>{"Retype New Password"}</label>
          <input
            type="text"
            className="outline-none border border-gray-300 w-full py-1 my-3"
          ></input>
        </div>
        <botton className="w-fit bg-blue-700 text-white p-2 rounded">
          Submit
        </botton>
      </form>
    </div>
  );
}

export default ChangePassword;
