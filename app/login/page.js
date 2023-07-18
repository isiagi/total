import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="pt-[14vh] h-screen bg-gradient-to-r from-green-400  flex items-center justify-center">
      <div className="bg-white p-8 rounded">
        <div className="text-center">
          <h3 className="text-[#945012] font-medium">TOTAL CARE EUROPE UNIPESSOAL LDA</h3>
          <h3 className="font-medium text-slate-700">User Login Panel</h3>
        </div>
        <div>
          <form>
            <div className="py-4">
              <div>
                <label htmlFor="username" className="text-slate-700">Userid / Username</label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="border border-gray-300 w-full outline-none bg-white focus:border-blue-300 p-1 my-2 rounded"
                  placeholder="Username / Userid"
                />
              </div>
              <div>
                <label htmlFor="username" className="text-slate-700">Password</label>
                <br />
                <input
                  type="password"
                  name="username"
                  id="username"
                  placeholder="Password"
                  className="border border-gray-300 w-full outline-none bg-white focus:border-blue-300 p-1 my-2 rounded"
                />
              </div>
            </div>
            <div className="flex justify-center mb-3">
              <Link href="/dashboard">
                <button className="p-2 bg-blue-400 text-white rounded">
                  Login
                </button>
              </Link>
            </div>
            <hr />
            <p className=" text-slate-700">
              Not registered?{" "}
              <Link href={"/register"}>
                <span className="text-blue-400">Register now</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
