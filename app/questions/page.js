"use client";

import Intro from "@/components/Intro";
import { Disclosure } from "@headlessui/react";
import { BiSolidDownArrow } from "react-icons/bi";

function page() {
  return (
    <div>
      <Intro text="A & Q"/>
      <div className="md:px-12 px-2 py-12">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center px-6 rounded py-2 bg-[#489FAF] text-white w-full text-left">
                <span>How do I join Total Care?</span>
                <BiSolidDownArrow
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-4 w-4 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center px-6 rounded py-2 bg-[#489FAF] text-white w-full text-left">
                <span>How much do Total Care Products Cost?</span>
                <BiSolidDownArrow
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-4 w-4 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center px-6 rounded py-2 bg-[#489FAF] text-white w-full text-left">
                <span>How do I pay for Total Care Products?</span>
                <BiSolidDownArrow
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-4 w-4 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center px-6 rounded py-2 bg-[#489FAF] text-white w-full text-left">
                <span>
                  {" "}
                  How are orders/ products delivered and what are the delivery
                  rates?
                </span>
                <BiSolidDownArrow
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-4 w-4 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default page;
