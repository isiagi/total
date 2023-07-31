import React from "react";

function FundTransfer() {
  return (
    <div>
      <div>
        <h2 className="font-medium text-xl">Activation Wallet To Activation Wallet fund transfer</h2>
        <h2 className="font-medium text-xl my-3">Activation Wallet Ballance : USD 0.00</h2>
        <div>
          <form>
            <div>
              <label htmlFor="username">
                Enter Recipient User ID / Username
              </label><br />
              <input type="text" name="username" id="username" className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"/>
            </div>
            <div>
              <label htmlFor="amount">
              Enter Amount to Transfer
              </label><br />
              <input type="text" name="amount" id="amount" className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"/>
            </div>
            <div>
              <label htmlFor="password">
              Enter Password
              </label><br />
              <input type="password" name="password" id="password" className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"/>
            </div>
            <button type="submit" className="bg-blue-400 text-white p-3 rounded">Transfer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FundTransfer;
