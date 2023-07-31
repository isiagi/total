import { Select } from "antd";
import React from "react";

function AddFunds() {
  return (
    <div>
      <div className="">
        <form>
          <div>
            <label htmlFor="amount">Enter Amount</label>
            <br />
            <input
              type="number"
              name="amount"
              id="amount"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"
            />
          </div>
          <div className="my-3">
            <label htmlFor="select">
              Select bank in which you deposit the payment
            </label>
            <br />
            <Select className="w-[70%]">
              <option value="">Choose Bank</option>
              <option>Millenium</option>
            </Select>
          </div>
          <div className="my-3">
            <label htmlFor="transaction">
              Enter Transaction / Reference / UTR Number
            </label>
            <br />
            <input
              type="text"
              name="transaction"
              id="transaction"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"
            />
          </div>
          <div className="my-3">
            <label htmlFor="holder">Account Holder Name</label>
            <br />
            <input
              type="text"
              name="holder"
              id="holder"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"
            />
          </div>
          <div className="my-3">
            <label htmlFor="proof">Payment Proof</label>
            <br />
            <input
              type="file"
              name="proof"
              id="proof"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"
            />
          </div>
          <div className="my-3">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"
            />
          </div>
          <button className="bg-blue-400 text-white p-3 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddFunds;
