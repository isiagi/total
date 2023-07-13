import React from "react";

function page() {
  return (
    <div className="pt-[14vh] h-screen bg-orange-100 flex justify-center items-center">
      <div className="bg-white md:w-[70%] w-[90%] p-6">
        <h2 className="text-center">TOTAL CARE EUROPE UNIPESSOAL LDA</h2>
        <h3 className="text-center">Registration</h3>

        <p className="bg-[#F6F6F6] py-2 text-lg">Verify Sponsor</p>
        <div className="py-9">
           <span><label htmlFor="sponsor">Enter Sponsor Id:</label></span> 
          <div className="flex items-center gap-3">
            <input type="text" name="sponsor" id="sponsor" className="outline-none border border-gray-300 w-[50%]"/>
          <button className="bg-blue-300">Verify</button>
          </div>
        </div>
        <hr />
        <p className="text-center pt-5">Already a user? Sign in</p>
      </div>
    </div>
  );
}

export default page;
