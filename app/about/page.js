import Intro from "@/components/Intro";
import Image from "next/image";
import benefit from "@/public/product2.png";
import mission from "@/public/mission.jpg";
import values from "@/public/values.jpg";
import about from "@/public/product01.jpg";

function page() {
  return (
    <div className="min-h-screen">
      <Intro />
      <div className="px-12 py-8">
        <div className="grid grid-cols-fluid">
          <div>
            <h3 className="text-[#8B7A4F] font-medium text-xl">About Us</h3>
            <p className="text-slate-600 leading-loose">
              TOTAL CARE company was founded in 2022. the headquaters based in
              lisbon, europe with a registered company office in south africa.
              the company was formed to provide solutions within the health &
              wellness in the network marketing industry providing natural
              health products & cosmetics. our products undergo state-of-the-art
              high quality research & development using latest technology. the
              company markets & distributes its products worldwide through its
              distributors by means of direct selling. our comprehensive
              products ranges which continues to grow through research &
              development initiaves, includes healthcare, personal care, weight
              management, skin care & household products. we are a company from
              africa to the world with best solutions to health, wellness &
              wealth
            </p>
          </div>
          <div className="md:h-[430px] h-[300px]">
            <Image
              src={about}
              alt=""
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-fluid">
          <div className="md:h-[430px] h-[300px]">
            <Image
              src={mission}
              alt=""
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
          <div>
            <div>
              <h3 className="text-[#8B7A4F] font-medium text-xl">Mission</h3>
              <p className="text-slate-600 leading-loose">
                To provide the best health and wellness solutions to our
                worldwide clients consistently.
              </p>
            </div>
            <div>
              <h3 className="text-[#8B7A4F] font-medium text-xl">Vision</h3>
              <p className="text-slate-600 leading-loose">
                To be the most desirable and reliable health, wellness and
                lifestyle products provider around the globe
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-fluid">
          <div>
            <h3 className="text-[#8B7A4F] font-medium text-xl">Values</h3>
            <p className="text-slate-600 leading-loose">
              Strives to deliver high quality products with :
            </p>
            <ul className="list-decimal">
              <li className="text-slate-600 leading-loose">Integrity</li>
              <li className="text-slate-600 leading-loose">loyalty</li>
              <li className="text-slate-600 leading-loose">Reliability</li>
              <li className="text-slate-600 leading-loose">professionalism</li>
            </ul>
          </div>
          <div className="md:h-[430px] h-[300px]">
            <Image
              src={values}
              alt=""
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-fluid">
          <div className="md:h-[430px] h-[300px]">
            <Image
              src={benefit}
              alt=""
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
          <div>
            <h3 className="text-[#8B7A4F] font-medium text-xl">
              PARTNERSHIP BENEFITS
            </h3>
            <ul className="leading-loose">
              <li className="py-2 text-slate-600">
                Opportunity to start a business within a business
              </li>

              <li className="py-2 text-slate-600">
                {" "}
                Personal & leadership development
              </li>

              <li className="py-2 text-slate-600">Create wealth</li>

              <li className="py-2 text-slate-600">Unique compensation plan</li>

              <li className="py-2 text-slate-600">
                Personal information protected – popi act
              </li>

              <li className="py-2 text-slate-600">
                Realise your dreams & reach your goals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
