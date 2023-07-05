import Image from "next/image";
import logo from "@/public/logo.png";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={logo} alt=" " width={80} height={80} />
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex gap-10">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>PRODUCTS</li>
          <li>COMPENSATION PLAN</li>
          <li>LOGIN US</li>
          <li>CONTACT US</li>
        </ul>
        <div>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Nav;
