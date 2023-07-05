import Image from "next/image";
import React from "react";

import ceoImg from "@/public/ceo.jpg"

function Founder() {
  return (
    <>
    <div className="flex items-center flex-wrap">
      <div>
        <h3 className="font-bold">FOUNDER &CEO EXPERIENCE</h3>
        <p className="py-2">12 years of full time work in the network marketing industry</p>
        <p className="py-2">
          Outstanding achievement being the top earner in all of his network
          marketing business engagements
        </p>
        <p className="py-2">
          Building a strong network supporting and building successful teams
          worldwide
        </p>
        <p className="py-2">He believes that satisfaction is derived from doing what you love</p>
        <p className="py-2">
          He loves working & helping people, encouraged by their success stories
        </p>
        <p className="py-2">Working with people are his greatest passion and joy.</p>
        <p className="py-2">He believes that with god everything is possible</p>
        <h3 className="text-center font-bold">
          Be innovative – Motivate Your Team – Encourage them to Succeed by<br />
          Generating better income Be part of Business & Job Creation - <span className="text-[#628C22]">Join Us
          Now</span>
        </h3>
      </div>
      <div>
        <Image
          src={ceoImg}
          alt="founder/ceo"
        //   width={200}
        //   height={200}
        />
      </div>
    </div>
    <div>

    </div>
    </>
  );
}

export default Founder;
