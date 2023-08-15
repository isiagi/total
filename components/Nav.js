"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";
import {BiSolidChevronDown} from 'react-icons/bi'
import { forwardRef, useState } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full z-10 bg-white opacity-95 md:h-[14vh] h-[12vh] flex justify-between items-center shadow shadow-sm">
      <div className="w-full flex justify-between items-center md:px-12 px-2">
        <div className="flex md:w-auto w-full items-center justify-between">
          <Link href="/">
            <Image src={logo} alt=" " width={80} height={80} />
          </Link>
          <div className="md:hidden">
            {open ? (
              <div onClick={() => setOpen(!open)}>
                <ImCancelCircle className="text-2xl text-slate-700" />
              </div>
            ) : (
              <div onClick={() => setOpen(!open)}>
                <CgDetailsMore className="text-2xl text-slate-700" />
              </div>
            )}
          </div>
        </div>

        <ul className="md:flex hidden items-center gap-10 font-medium text-slate-700">
          <Link href="/">
            <li className="hover:text-[#628C22] ">HOME</li>
          </Link>
          <li>
            <Menu>
              <Menu.Button className="flex hover:text-[#628C22]">
                <span>ABOUT US</span>
                <BiSolidChevronDown />
              </Menu.Button>
              <Menu.Items
                className={
                  "absolute bottom-[-120px] z-20 shadow-2xl bg-white w-60 font-normal text-slate-600"
                }
              >
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active ? "text-[#628C22]" : "text-[#628C22]"
                      } text-base py-1 border-b-[1px] hover:text-[#628C22]`}
                      href="/about"
                    >
                      About Us
                    </MyLink>
                  )}
                </Menu.Item>
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active ? "text-[#628C22]" : "bg-white text-black"
                      } text-base py-1 border-b-[1px] hover:text-[#628C22]`}
                      href="/questions"
                    >
                      A & Q
                    </MyLink>
                  )}
                </Menu.Item>
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active ? "text-[#628C22]" : "bg-white text-black"
                      } text-base py-1 border-b-[1px] hover:text-[#628C22]`}
                      href="/events"
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
          <a href="/promotion.pdf" target="_blank" rel="noopener noreferrer">
            <li className="hover:text-[#628C22]">COMPENSATION PLAN</li>
          </a>
          <li>
            <Menu>
            <Menu.Button className="flex hover:text-[#628C22]">
                <span>LOGIN AS</span>
                <BiSolidChevronDown />
              </Menu.Button>
              <Menu.Items
                className={
                  "absolute bottom-[-120px] z-20 shadow-2xl bg-white w-60 font-normal text-slate-600 rounded"
                }
              >
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active ? "text-[#628C22]" : "text-[#628C22]"
                      } text-base py-1 border-b-[1px] hover:text-[#628C22]`}
                      href="/login"
                    >
                      User Login
                    </MyLink>
                  )}
                </Menu.Item>
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active ? "text-[#628C22]" : "bg-white text-black"
                      } text-base py-1 border-b-[1px] hover:text-[#628C22]`}
                      href="/register"
                    >
                      User Register
                    </MyLink>
                  )}
                </Menu.Item>
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active ? "text-[#628C22]" : "bg-white text-black"
                      } text-base py-1 border-b-[1px] hover:text-[#628C22]`}
                      href="/"
                    >
                      Stockist Login
                    </MyLink>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <Link href="/contact">
            <li className="hover:text-[#628C22]">CONTACT US</li>
          </Link>
          <li className="relative">
            <div>
              <FaShoppingCart className="text-xl" />
              <p className="absolute bottom-4 left-2 bg-[#306666] text-white w-4 h-4 text-xs text-center rounded-[50%]">
                0
              </p>
            </div>
          </li>
        </ul>

        {/* mobile */}

        <ul
          className={`
        md:hidden bg-white flex flex-col gap-5 absolute w-full top-[100px] overflow-y-auto py-12 font-medium pl-4
        duration-500 text-slate-700 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="hover:text-[#628C22]">HOME</li>
          </Link>
          <li className="relative">
            <Menu>
            <Menu.Button className="flex hover:text-[#628C22]">
                <span>ABOUT US</span>
                <BiSolidChevronDown />
              </Menu.Button>

              <Menu.Items
                className={
                  "absolute top-[27px] z-20 shadow-2xl bg-white font-normal w-60 rounded"
                }
              >
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } text-sm py-1 border-b-[1px]`}
                      href="/about"
                      onClick={() => setOpen(false)}
                    >
                      About Us
                    </MyLink>
                  )}
                </Menu.Item>
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } text-sm py-1 border-b-[1px]`}
                      href="/"
                      onClick={() => setOpen(false)}
                    >
                      A & Q
                    </MyLink>
                  )}
                </Menu.Item>
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2 ">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } text-sm py-1 border-b-[1px]`}
                      href="/file"
                      onClick={() => setOpen(false)}
                    >
                      Events
                    </MyLink>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="hover:text-[#628C22]">PRODUCTS</li>
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="hover:text-[#628C22]">COMPENSATION PLAN</li>
          </Link>
          <li className="relative">
            <Menu>
            <Menu.Button className="flex hover:text-[#628C22]">
                <span>LOGIN AS</span>
                <BiSolidChevronDown />
              </Menu.Button>

              <Menu.Items
                className={
                  "absolute top-[27px] z-20 shadow-2xl bg-white font-normal w-60 rounded"
                }
              >
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } text-sm py-1 border-b-[1px]`}
                      href="/login"
                      onClick={() => setOpen(false)}
                    >
                      User Login
                    </MyLink>
                  )}
                </Menu.Item>
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } text-sm py-1 border-b-[1px]`}
                      href="/register"
                      onClick={() => setOpen(false)}
                    >
                      User Register
                    </MyLink>
                  )}
                </Menu.Item>
                <Menu.Item className="block text-slate-600 text-base py-2 pl-2">
                  {({ active }) => (
                    <MyLink
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } text-sm py-1 border-b-[1px]`}
                      href="/"
                      onClick={() => setOpen(false)}
                    >
                      Stockist Login
                    </MyLink>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <Link href="/contact" onClick={() => setOpen(false)}>
            <li className="hover:text-[#628C22]">CONTACT US</li>
          </Link>
          <li className="relative" onClick={() => setOpen(false)}>
            <div>
              <FaShoppingCart className="text-xl" />
              <p className="absolute bottom-4 left-2 bg-green-500 text-white w-4 h-4 text-xs text-center rounded-[50%]">
                0
              </p>
            </div>
          </li>
        </ul>
      </div>
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
