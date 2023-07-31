import React from "react";

function Wallet() {
  return (
    <div>
      <div className="flex bg-[#F5F5F5] justify-between w-[25%] p-3 items-center">
        <div className="bg-white p-2">
          <h1>$</h1>
        </div>
        <div>
          <h3 className="text-green-400">INCOME WALLET</h3>
          <h3 className="my-3">&#42779; USD</h3>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
