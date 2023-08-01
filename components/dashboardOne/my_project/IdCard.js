import Image from "next/image";
import React from "react";

function IdCard() {
  return (
    <div>
      <div className="flex justify-center text-center">
        <div className="border relative border-gray-300 w-fit">
          <h3>TOTAL CARE EUROPE UNIPESSOAL LDA</h3>
          <Image
            src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg"
            alt="love"
            width={200}
            height={200}
          />
          <div>
            <h3 className="my-3">Name : Mulinde Fred Mubiru</h3>
            <h3 className="my-3">LogID : TC822980</h3>
            <h3 className="my-3">Address : KANGULUMIRA</h3>
            <h3 className="my-3">Contact No. : 0782200164</h3>
          </div>
        </div>
      </div>
      <button className="bg-blue-400 text-white p-3 rounded" >Print</button>
    </div>
  );
}

export default IdCard;
