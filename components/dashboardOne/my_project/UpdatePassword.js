import React from "react";

function UpdatePassword() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <label htmlFor="name">Username:</label>
            <br />
            <input
              type="text"
              name="name"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="name">Country:</label>
            <br />
            <input
              type="text"
              name="name"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="name">Full Name:</label>
          <br />
          <input
            type="text"
            name="name"
            className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <label htmlFor="name">Old Password:</label>
            <br />
            <input
              type="password"
              name="name"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="name">New Password:</label>
            <br />
            <input
              type="password"
              name="name"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="name">Confirm Password:</label>
            <br />
            <input
              type="password"
              name="name"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
        </div>
        <button className="bg-blue-400 text-white p-3 rounded">Proceed</button>
      </div>
    </div>
  );
}

export default UpdatePassword;
