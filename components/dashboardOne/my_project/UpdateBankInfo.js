import React from "react";

function UpdateBankInfo() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <label htmlFor="holder">Account Holder Name :</label>
            <br />
            <input
              type="text"
              name="holder"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="bank">Bank Name</label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <label htmlFor="code">IFSC Code :</label>
            <br />
            <input
              type="text"
              name="code"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="state">Bank State :</label>
            <br />
            <input
              type="text"
              name="state"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex-1">
            <label htmlFor="branch">Bank Branch :</label>
            <br />
            <input
              type="text"
              name="branch"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="account">Account Number :</label>
            <br />
            <input
              type="text"
              name="account"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
            />
          </div>
        </div>
        <button className="bg-blue-400 text-white p-3 rounded">Proceed</button>
      </div>
    </div>
  );
}

export default UpdateBankInfo;
