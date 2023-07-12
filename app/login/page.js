import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="pt-[14vh] h-screen bg-orange-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded">
        <div className="text-center">
          <h3>TOTAL CARE EUROPE UNIPESSOAL LDA</h3>
          <h3>User Login Panel</h3>
        </div>
        <div>
          <form>
            <div className="py-4">
              <div>
                <label htmlFor="username">Userid / Username</label>
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
                <label htmlFor="username">Password</label>
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
              <button className="p-2 bg-blue-800 text-white rounded">
                Login
              </button>
            </div>
            <hr />
            <p>
              Not registered?{" "}
              <Link href={"/register"}>
                <span>Register now</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
