import React from "react";

function EditUser() {
  return (
    <div className="flex justify-center">
      <div className="md:w-[60%] w-[90%]">
        <h2>UPDATE MEMBER PROFILE</h2>
        <hr />
        {["Sponsor ID", "Sponsor Name", "User Registration Date"].map(
          (item) => (
            <InputForm key={item} name={item} />
          )
        )}
        <h2>Personal Information</h2>
        {[
          "Userid",
          "Username",
          "Full Name",
          "Email",
          "Contactno",
          "Address",
          "Password",
          "Date Of Birth",
          "Gender",
        ].map((item) => (
          <InputForm key={item} name={item} />
        ))}
        <botton className="w-fit bg-blue-700 text-white p-2 rounded">Update</botton>
      </div>
    </div>
  );
}

export default EditUser;

function InputForm({ name, key }) {
  return (
    <div className="my-2" key={key}>
      <label>{name}</label>
      <input
        type="text"
        className="outline-none border border-gray-300 w-full py-1 my-3"
      ></input>
    </div>
  );
}
