import Image from "next/image";
import ceoImg from "@/public/product2.png";
import ButtonComponent from "@/components/button/Button";

function Dashboard() {
  return (
    <div>
      <h2 className="text-slate-600 text-lg font-medium">Profile Details</h2>
      <div className="flex gap-6 items-center py-2">
        <div className="relative md:w-[180px] w-full h-[160px] rounded">
          <Image
            src={ceoImg}
            alt=""
            className="block w-[100%] h-[100%] rounded object-cover"
          />
        </div>
        <div>
          <div className="flex gap-5">
            <ButtonComponent
              name="Upload New Photo"
              backgroundColor={"#1776FC"}
            />

            <ButtonComponent name="Reset" backgroundColor={"#1776FC"} />
          </div>
          <h3 className="py-4 text-slate-600">Allow JPG, WEBP, or PNG. Max size 800k</h3>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex-1 mt-4">
          <label className="text-slate-600" htmlFor="holder">Full Name :</label>
          <br />
          <input
            type="text"
            name="holder"
            className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
          />
        </div>
        <div className="flex flex-wrap gap-3 my-4">
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="holder">Gender</label>
            <br />
            <select className="outline-none rounded mb-1 w-full py-[10px] bg-white border">
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="bank">Date of Birth</label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="holder">Address</label>
            <br />
            <input
              type="text"
              name="holder"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="bank">Phone Number</label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="holder">GST</label>
            <br />
            <input
              type="text"
              name="holder"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
          <div className="flex-1">
            <label className="text-slate-600" htmlFor="bank">LandMark</label>
            <br />
            <input
              type="text"
              name="bank"
              className="border outline-none border-gray-300 py-2 rounded mb-1 w-full"
            />
          </div>
        </div>
        <ButtonComponent name="Update Profile" backgroundColor={"green"} />
      </div>
    </div>
  );
}

export default Dashboard;
