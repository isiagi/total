import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-full h-screen relative overflow-hidden">
      <div className="absolute w-full h-full animate-[zoom_80s_infinite] bg-[url('https://totalcareeurope.com/webAssets/img/banner1.webp')] bg-cover bg-center"></div>
        <div class="w-full h-full flex items-center backdrop-brightness-50">
          <div className="bg-[#525252] opacity-80 ml-9 p-6 md:w-[40%] w-[70%]">
            <p className="text-white">WELCOME TO TOTAL CARE</p>
            <p className="text-white font-medium mb-5">We Care, For Your <span className="text-[#489FAF]">Health</span> And Wellbeing</p>
            <div>
              <button className="p-3 bg-[#fff] mr-4">JOIN US</button>
              <button className="p-3 bg-[#489FAF] text-white">LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
