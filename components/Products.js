import Image from "next/image";
import { TfiControlForward } from "react-icons/tfi";
import ceoImg from "@/public/product2.png";

function Products() {
  return (
    <div className="relative h-[50rem] pb-16 bg-[#F7F7F7]">
      <div className="h-96 bg-[url('https://totalcareeurope.com/webAssets/img/banner/banner-2.jpg')] bg-cover bg-center">
        <div class="w-full h-full flex items-center backdrop-brightness-50 text-white">
          <div className="mx-auto text-center max-w-xl">
            <h3 className="font-bold">Our Products</h3>
            <p>
              The company is coming in a very big way in the market through
              various Products. Total Care Europe Unipessoal LDA is motivated to
              deliver high quality products and services which comes with full
              guarantee of performance.
            </p>
          </div>
        </div>
      </div>
      <div className=" md:w-96 w-full absolute top-[40%] md:px-12">
        <div className="relative w-full" >
          <div className="relative md:w-96 w-full h-72">
            <Image
              src={ceoImg}
              alt=""
              fill
              objectFit="cover"
              className=" block w-[100%]"
            />
          </div>
          <div className="absolute bottom-0 mx-auto md:w-96 w-full bg-slate-800 opacity-80">
            <p className="text-center font-bold text-white py-2">TCM ORANGER</p>
          </div>
        </div>
        <div className="bg-white py-6 md:w-96 w-full">
          <p>This is a product that everybody deserves.</p>
          <p>Our TCM Orange is enriched.</p>
          <span className="flex items-center font-bold"><h2>Read More</h2> <TfiControlForward className="font-bold"/></span>
        </div>
      </div>
    </div>
  );
}

export default Products;
