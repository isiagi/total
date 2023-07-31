import { Select } from "antd";
import Image from "next/image";
import React from "react";

function UpdateProfile() {
  return (
    <div>
      <div>
        <div className="flex items-center">
          <Image
            src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg"
            alt="profile"
            width={200}
            height={200}
          />
          <div className="block">
            <input
              type="file"
              name=""
              id=""
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"
            />
            <br />
            <button
              type="submit"
              className="border outline-none border-gray-300 py-1 rounded mb-1 w-[70%]"
            >
              Change Photo
            </button>
          </div>
        </div>
        <div>
          <h2>Personal Information</h2>
          <div className="flex flex-wrap gap-3">
            <div className="flex-1">
              <label htmlFor="name">Full Name</label>
              <br />
              <input
                type="text"
                name="name"
                className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="Gender">Gender</label>
              <br />
              <Select className="outline-none rounded mb-1 w-full">
                <option>Female</option>
                <option>Male</option>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex-1">
              <label htmlFor="date">Date Of Birth :</label>
              <br />
              <input
                type="date"
                name="date"
                className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="name">Email</label>
              <br />
              <input
                type="email"
                name="email"
                className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="name">Mobile Number:</label>
            <br />
            <input
              type="tel"
              name="email"
              className="border outline-none border-gray-300 py-1 rounded mb-1 md:w-[50%] w-full"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex-1">
              <label htmlFor="num">GST No:</label>
              <br />
              <input
                type="text"
                name="num"
                className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="address">Address:</label>
              <br />
              <input
                type="text"
                name="address"
                className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Landmark">Landmark:</label>
            <br />
            <textarea
              name="Landmark"
              id="Landmark"
              cols="30"
              rows="10"
              className="border outline-none border-gray-300 py-1 rounded mb-1 md:w-[49%] w-full"
            ></textarea>
          </div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">I Have Read And Agree to the Terms & Conditions, Disclaimer, Agreement & Policy in Free Registration</label>
            <br />
          </div>
          <button className="bg-blue-400 text-white p-3 rounded">Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
