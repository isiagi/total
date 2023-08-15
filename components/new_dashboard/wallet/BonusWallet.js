import React from "react";

function BonusWallet() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-purple-300 p-6 text-white">
          <h2>StaffID</h2>
          <h3>45367876543</h3>
        </div>
        <div>
          <h2>Approved Bonus</h2>
          <h3>$ 453677</h3>
        </div>
        <div>
          <h2>Pending Bonus</h2>
          <h3>$ 76543</h3>
        </div>
      </div>
    </div>
  );
}

export default BonusWallet;
