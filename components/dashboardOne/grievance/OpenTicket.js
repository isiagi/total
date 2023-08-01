import { Select } from "antd";
import React from "react";

function OpenTicket() {
  return (
    <div>
      <div>
        <h2>Raise Ticket</h2>
        <div>
          <div>
            <label htmlFor="category">Category</label>
            <br />
            <Select className="outline-none border-gray-300 py-1 rounded mb-1 w-full">
              <option value="">Choose selection</option>
              <option value="">Financial</option>
              <option value="">Technical</option>
              <option value="">General</option>
              <option value="">Product</option>
              <option value="">Others</option>
            </Select>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <br />
            <input type="text" name="subject" id="subject" className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"/>
          </div>
          <div>
            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" cols="30" rows="10" className="border outline-none border-gray-300 py-1 rounded mb-1 w-full"></textarea>
          </div>
          <button className="bg-blue-400 text-white p-3 rounded">Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default OpenTicket;
