import Link from "next/link";
import React from "react";

function page1() {
  return (
    <div className="pt-[14vh]">
      <div className="md:px-12 px-2 py-10">
        <h2 className="text-center text-[#945012] font-medium">
          TOTAL CARE EUROPE UNIPESSOAL LDA
        </h2>
        <h3 className="text-center font-medium text-slate-700 mt-2 mb-5">
          Registration
        </h3>
        <div>
          <div className="flex flex-wrap gap-3 my-4">
            <div className="flex-1">
              <label className="text-slate-600" htmlFor="number">
                First Name
              </label>
              <br />
              <input
                type="text"
                name="number"
                className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
              />
            </div>
            <div className="flex-1">
              <label className="text-slate-600" htmlFor="country">
                Other Name
              </label>
              <br />
              <input
                type="text"
                name="country"
                className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
              />
            </div>
            <div className="flex-1">
              <label className="text-slate-600" htmlFor="country">
                Last Name
              </label>
              <br />
              <input
                type="text"
                name="country"
                className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <div className="flex-1">
              <label className="text-slate-600" htmlFor="number">
                Email
              </label>
              <br />
              <input
                type="text"
                name="number"
                className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
              />
            </div>
            <div className="flex-1">
              <label className="text-slate-600" htmlFor="country">
                Recovery Email
              </label>
              <br />
              <input
                type="text"
                name="country"
                className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <div className="md:flex-1 w-full">
              <label className="text-slate-600" htmlFor="number">
                Password
              </label>
              <br />
              <input
                type="text"
                name="number"
                className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
              />
            </div>
            <div className="md:flex-1 w-full">
              <label className="text-slate-600" htmlFor="number">
                Confirm Password
              </label>
              <br />
              <input
                type="text"
                name="number"
                className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
              />
            </div>
            <div className="md:flex-1 w-full">
              <label className="text-slate-600" htmlFor="country">
                Referral Token
              </label>
              <br />
              <input
                type="text"
                name="country"
                className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
              />
            </div>
          </div>
          <Link href="/signUp">
            <button className="w-fit bg-blue-700 text-white p-2 rounded">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page1;
