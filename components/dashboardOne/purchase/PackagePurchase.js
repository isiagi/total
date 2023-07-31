import React from "react";

function PackagePurchase() {
  return (
    <div>
      <div>
        <h1 className="mb-6">Available Amount in Activation Wallet : USD</h1>
        <div className="pb-6 grid grid-cols-flud gap-4">
          {purchaseData.map((item) => (
            <div
              className="relative border border-gray-700 flex flex-col items-center justify-center w-full rounded"
              key={item.id}
            >
              <div className="absolute top-[-10px] bg-[#71B1AE] p-1 text-white rounded px-4">
                <h3>PACKAGE</h3>
              </div>
              <div className="bg-[#184250] text-white py-4 w-full text-center">
                <h3 className="my-3 font-bold text-lg">{item.name}</h3>
                <h3 className="my-3 font-bold text-xl">{item.price}</h3>
                <h3 className="my-3 font-bold text-lg">{item.sv}</h3>
              </div>
              <div className="py-9">
                <button className="bg-[#184250] text-white p-2 rounded">
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PackagePurchase;

const purchaseData = [
  {
    id: 1,
    name: "SILVER",
    price: "USD70",
    sv: "50 SV",
  },
  {
    id: 2,
    name: "GOLD",
    price: "USD670",
    sv: "450 SV",
  },
  {
    id: 3,
    name: "PLATINUM",
    price: "USD1045",
    sv: "750 SV",
  },
  {
    id: 3,
    name: "GOLD",
    price: "USD1720",
    sv: "1150 SV",
  },
];
