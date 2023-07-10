import Image from "next/image";
import benefit from "@/public/product2.png";

function Benefits() {
  return (
    <div className="grid grid-cols-fluid gap-5 px-12 py-10">
      <div>
        <h3 className="font-medium pt-5 mb-3 text-slate-700 text-lg">
          PARTNERSHIP BENEFITS
        </h3>
        <ul className="list-disc">
          <li className="py-2 text-slate-600">
            Opportunity to start a business within a business
          </li>
          <hr />
          <li className="py-2 text-slate-600">
            {" "}
            Personal & leadership development
          </li>
          <hr />
          <li className="py-2 text-slate-600">Create wealth</li>
          <hr />
          <li className="py-2 text-slate-600">Unique compensation plan</li>
          <hr />
          <li className="py-2 text-slate-600">
            Personal information protected – popi act
          </li>
          <hr />
          <li className="py-2 text-slate-600">
            Realise your dreams & reach your goals
          </li>
        </ul>
      </div>
      <div>
        <Image src={benefit} alt="" height={400} />
      </div>
    </div>
  );
}

export default Benefits;
