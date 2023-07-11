import Intro from "@/components/Intro";
import Image from "next/image";
import benefit from "@/public/product2.png";

function page() {
  return (
    <div>
      <Intro text="Products" />
      <div className="md:px-12 px-2 flex flex-wrap gap-10 py-12">
        <div className="md:w-fit w-full shadow-2xl h-fit p-6">
          <h2 className="text-[#F3B83B] font-medium">PRODUCT CATEGORIES</h2>
          <hr />
          <p className="text-slate-600 py-2">Cosmetics and Personal care</p>
          <p className="text-slate-600 py-2">Health and wellness</p>
          <p className="text-slate-600 py-2">HOME CARE</p>
        </div>
        <div>
          <div className="bg-[#F5F5F5] p-3 rounded">
            <div className="relative md:w-[200px] md:h-[200px]">
              <Image src={benefit} alt="" objectFit="contain" className="rounded"/>
            </div>
            <div>
              <h3 className="text-center">2 TCM ORANGE</h3>
              <div className="flex justify-between">
                <h3>MDS:</h3>
                <h3>200</h3>
              </div>
              <div className="flex justify-between">
                <h3>DP:</h3>
                <h3>200</h3>
              </div>
            </div>
            <button className="bg-[#dc2626] text-white w-full py-3 rounded">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
