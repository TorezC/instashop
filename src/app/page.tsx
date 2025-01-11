import Image from "next/image";
import shopping from '../../public/images/shopping-sale.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-36">
        <div className="text-center flex flex-col gap-3 ">
          <div className="flex justify-center items-center">
          <Image
            className="text-center"
            src={shopping}
            alt="shopping"
          />

          </div>
          <h1 className="font-bold text-3xl">Welcome</h1>
          <p className="w-80">The safest platfrom to shop from social media vendors</p>
          <ul className="bg-[#FFEAFA] text-sm font-medium border-[#8A226F] p-5 rounded-md">
            <li className="flex items-center py-1 gap-2"><FontAwesomeIcon color="#8A226F" icon={faCheckCircle} /> <span>Reach Millions of Shoppers</span> </li>
            <li className="flex items-center py-1 gap-2"><FontAwesomeIcon color="#8A226F" icon={faCheckCircle} /> <span>Easy Product Listing</span> </li>
            <li className="flex items-center py-1 gap-2"><FontAwesomeIcon color="#8A226F" icon={faCheckCircle} /> <span>Secure and Fast Payments</span> </li>
            <li className="flex items-center py-1 gap-2"><FontAwesomeIcon color="#8A226F" icon={faCheckCircle} /> <span>Boost Your Visibility</span> </li>
          </ul>
        </div>
        <button className="bg-[#8A226F] rounded-full p-2 text-white">Get Started</button>
      </div>
    </div>
  );
}
