import ButtonComponent from "@/components/button/Button";
import React from "react";

function TransferFunds() {
  return (
    <div>
      <div>
        <h3>Transfer Funds</h3>
        <div className="flex-1 my-3">
          <label className="text-slate-600" htmlFor="bank">
            Request
          </label>
          <br />
          <select className="outline-none rounded mb-1 w-full py-[10px] bg-white border">
            <option>DEPOSIT</option>
            <option>WITHDRAW</option>
            <option>PURCHASE</option>
            <option>BONUS</option>
          </select>
        </div>
        <div className="flex-1 my-3">
          <label className="text-slate-600" htmlFor="bank">
            Transaction Amount
          </label>
          <br />
          <input
            type="text"
            name="bank"
            className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
          />
        </div>
        <div>
          <div className="flex-1 my-3">
            <label className="text-slate-600" htmlFor="bank">
              Details
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
              Attachment File Id
            </label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
        </div>
        <ButtonComponent name="Transfer Funds" backgroundColor={"blue"} />
      </div>
    </div>
  );
}

export default TransferFunds;
