import { FaMap } from "react-icons/fa";
import { TfiControlForward } from "react-icons/tfi";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import Marquee from "react-fast-marquee";

import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#489FAF] text-white text-base leading-relaxed">
      <div className="px-12">
        <div className="min-h-[300px] flex items-center w-full">
          <div className="flex justify-between flex-wrap w-full">
            <div className="max-w-xs">
              <h3 className="font-medium mb-5">ABOUT US</h3>
              <p>
                Total Care, founded in 2022 with headquarters in Portugal, and
                distributor of wonderful products operating in more than 40
                countries, is vertically integrated, controlling to research and
                development, to manufacture, packaging, shipping, and
                distribution.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-5">OUR POLICIES</h3>
              <ul className="list-disc list-inside cursor-pointer">
                <Link href="/policies/terms">
                  <li className="flex items-center hover:text-slate-600">
                    <TfiControlForward className="mr-2" />
                    Terms & Conditions
                  </li>
                </Link>
                <Link href="/policies/policy">
                  <li className="flex items-center hover:text-slate-600">
                    <TfiControlForward className="mr-2" />
                    Policy Procedure
                  </li>
                </Link>
                <Link href="/policies/return">
                  <li className="flex items-center hover:text-slate-600">
                    <TfiControlForward className="mr-2" />
                    Return / Cancellation Policy
                  </li>
                </Link>
                <li className="flex items-center hover:text-slate-600">
                  <TfiControlForward className="mr-2" />
                  Privacy Policy
                </li>
                <Link href="/policies/pricing">
                  <li className="flex items-center hover:text-slate-600">
                    <TfiControlForward className="mr-2" />
                    Pricing Policy
                  </li>
                </Link>
                <Link href="/policies/claim">
                  <li className="flex items-center hover:text-slate-600">
                    <TfiControlForward className="mr-2" />
                    Disclaimer
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-5">REACH US</h3>
              <p>TOTAL CARE EUROPE UNIPESSOAL LDA</p>
              <span className="flex gap-1 items-center">
                <FaMap /> AV. D. JOÃO II, N.º 50 - 4º PISO ED.
              </span>
              <p className="max-w-xs">
                MAR VERMELHO - PARQUE DAS NAÇÕES 1990-095 LISBOA, PORTUGAL
              </p>
              <span className="flex items-center gap-1">
                <AiFillPhone /> +351937352378
              </span>
              <span className="flex items-center gap-1">
                <AiTwotoneMail /> info@totalcareeurope.com
              </span>
              <span className="flex items-center gap-1">
                <TbWorldWww /> www.totalcareeurope.com
              </span>
            </div>
            <div>
              <h3 className="font-medium mb-5">LATEST NEWS</h3>
              <div className="max-w-[250px]">
                <Marquee>
                  <p className="max-w-[250px]">
                    Welcome to Total Care Europe Unipessoal LDA
                  </p>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h3 className="text-center py-4">
            © Copyright {getCurrentYear()}. All Rights Reserved By TOTAL CARE
            EUROPE UNIPESSOAL LDA
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;

function getCurrentYear() {
  return new Date().getFullYear();
}
