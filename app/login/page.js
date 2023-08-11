"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://api.totalcareeurope.website/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);

        console.log("login data", data);

        toast.success("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // Redirect to authenticated page
        router.push("/dashboard");
      } else {
        // Handle authentication error
        toast.error("Failed to Log In", {
          position: "top-right",
          autoClose: 50000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      // Handle fetch error
      toast.error("Failed to Log In", {
        position: "top-right",
        autoClose: 50000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
 
    }
  };
  return (
    <div className="pt-[14vh] h-screen bg-gradient-to-r from-green-400  flex items-center justify-center">
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-white p-8 rounded">
        <div className="text-center">
          <h3 className="text-[#945012] font-medium">
            TOTAL CARE EUROPE UNIPESSOAL LDA
          </h3>
          <h3 className="font-medium text-slate-700">User Login Panel</h3>
        </div>
        <div>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="py-4">
              <div>
                <label htmlFor="username" className="text-slate-700">
                  Userid / Username
                </label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="border border-gray-300 w-full outline-none bg-white focus:border-blue-300 p-1 my-2 rounded"
                  placeholder="Username / Userid"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="username" className="text-slate-700">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 w-full outline-none bg-white focus:border-blue-300 p-1 my-2 rounded"
                />
              </div>
            </div>
            <div className="flex justify-center mb-3">
              <button
                type="submit"
                className="p-2 bg-blue-400 text-white rounded"
              >
                Login
              </button>
            </div>
          </form>
          <hr />
          <p className=" text-slate-700">
            Not registered?{" "}
            <Link href={"/signUp"}>
              <span className="text-blue-400">Register now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
