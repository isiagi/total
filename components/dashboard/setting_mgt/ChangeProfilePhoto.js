import React from "react";

function ChangeProfilePhoto() {
  return (
    <div>
      <label for="files">Upload Image</label>
      <input
        type="file"
        id="files"
        class="outline-none border border-gray-300 p-2"
      />
      <div className="mt-4">
        <botton className="w-fit bg-blue-700 text-white p-2 rounded ">
          Submit
        </botton>
      </div>
    </div>
  );
}

export default ChangeProfilePhoto;
