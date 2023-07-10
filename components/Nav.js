"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { forwardRef, useState } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

function Nav() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed w-full z-10 bg-white opacity-95 flex justify-between items-center">
      <div className="flex md:w-auto w-full items-center justify-between">
        <Image src={logo} alt=" " width={80} height={80} />
        <div className="md:hidden">
          {open ? (
            <div onClick={() => setOpen(!open)}>Hey</div>
          ) : (
            <div onClick={() => setOpen(!open)}>Hello</div>
          )}
        </div>
      </div>

      <ul className="md:flex hidden items-center gap-12 ">
        <Link href="/">
          <li className="hover:text-[#628C22]">HOME</li>
        </Link>
        <li>
          <Menu>
            <Menu.Button className="hover:text-[#628C22]">ABOUT US</Menu.Button>
            <Menu.Items
              className={
                "absolute bottom-[-90px] z-20 shadow-2xl bg-white w-60"
              }
            >
              <Menu.Item className="block">
                {({ active }) => (
                  <MyLink
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    } text-base py-1 border-b-[1px]`}
                    href="/about"
                  >
                    About Us
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item className="block">
                {({ active }) => (
                  <MyLink
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    } text-base py-1 border-b-[1px]`}
                    href="/prof"
                  >
                    A & Q
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item className="block">
                {({ active }) => (
                  <MyLink
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    } text-base py-1 border-b-[1px]`}
                    href="/file"
                  >
                    Events
                  </MyLink>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </li>
        <Link href="/product">
          <li className="hover:text-[#628C22]">PRODUCTS</li>
        </Link>
        <Link href="/">
          <li className="hover:text-[#628C22]">COMPENSATION PLAN</li>
        </Link>
        <Link href="/">
          <li className="hover:text-[#628C22]">LOGIN US</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-[#628C22]">CONTACT US</li>
        </Link>
        <div>
          <FaShoppingCart />
        </div>
      </ul>

      {/* mobile */}

      <ul
        className={`
        md:hidden bg-white absolute w-full top-[100px] overflow-y-auto py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
      >
        <Link href="/">
          <li className="hover:text-[#628C22]">HOME</li>
        </Link>
        <li className="relative">
          <Menu>
            <Menu.Button className="hover:text-[#628C22]">ABOUT US</Menu.Button>

            <Menu.Items
              className={"absolute top-[30px] z-20 shadow-2xl bg-white w-60"}
            >
              <Menu.Item className="block">
                {({ active }) => (
                  <MyLink
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    } text-base py-1 border-b-[1px]`}
                    href="/about"
                  >
                    About Us
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item className="block">
                {({ active }) => (
                  <MyLink
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    } text-base py-1 border-b-[1px]`}
                    href="/prof"
                  >
                    A & Q
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item className="block">
                {({ active }) => (
                  <MyLink
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    } text-base py-1 border-b-[1px]`}
                    href="/file"
                  >
                    Events
                  </MyLink>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </li>
        <Link href="/">
          <li className="hover:text-[#628C22]">PRODUCTS</li>
        </Link>
        <Link href="/">
          <li className="hover:text-[#628C22]">COMPENSATION PLAN</li>
        </Link>
        <Link href="/">
          <li className="hover:text-[#628C22]">LOGIN US</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-[#628C22]">CONTACT US</li>
        </Link>
        <div>
          <FaShoppingCart />
        </div>
      </ul>
    </div>
  );
}

export default Nav;

// eslint-disable-next-line react/display-name
const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});
