"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function Nav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={logo} alt=" " width={80} height={80} />
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex gap-10">
          <li>HOME</li>
          <li>
            <div className="relative inline-block">
              <button
                className=" text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                Dropdown
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {/* Dropdown items */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Item 3
                  </a>
                </div>
              )}
            </div>
          </li>
          <li>PRODUCTS</li>
          <li>COMPENSATION PLAN</li>
          <li>LOGIN US</li>
          <li>CONTACT US</li>
        </ul>
        <div>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Nav;
