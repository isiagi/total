import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-full h-screen bg-[url('https://totalcareeurope.com/webAssets/img/banner1.webp')] bg-cover bg-center">
        <div class="w-full h-full flex items-center backdrop-brightness-50">
          <div className="bg-[#525252] opacity-80 ml-9 p-4">
            <p className="text-white">WELCOME TO TOTAL CARE</p>
            <p className="text-white">We Care, For Your <span className="text-[#489FAF]">Health</span> And Wellbeing</p>
            <div>
              <button className="p-3 bg-[#fff]">JOIN US</button>
              <button className="p-3 bg-[#489FAF] text-white">LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
