import Image from "next/image";
import benefit from "@/public/product2.png";

function Benefits() {
  return (
    <div className="grid grid-cols-fluid gap-5">
      <div>
        <h3>PARTNERSHIP BENEFITS</h3>
        <ul>
          <li className="py-2">
            Opportunity to start a business within a business
          </li>
          <hr />
          <li className="py-2"> Personal & leadership development</li>
          <hr />
          <li className="py-2">Create wealth</li>
          <hr />
          <li className="py-2">Unique compensation plan</li>
          <hr />
          <li className="py-2">Personal information protected – popi act</li>
          <hr />
          <li className="py-2">Realise your dreams & reach your goals</li>
        </ul>
      </div>
      <div>
        <Image src={benefit} alt="" height={400} />
      </div>
    </div>
  );
}

export default Benefits;
