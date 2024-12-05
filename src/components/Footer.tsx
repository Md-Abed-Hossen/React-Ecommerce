import FooterLogo from "@/assets/footerlogo.png";
import { companyArr, resourcesArr } from "@/components/Arrays";
import { FaArrowRightLong } from "react-icons/fa6";
import CreditCard from "@/components/CreditCard";

const Footer = () => {
  return (
    <div className="bg-[#2f3c44] h-[574.4px]  py-[65px]">
      <div className="px-[50px] mx-[70px] flex">
        <div className="h-[275.4px] w-[436.6px]">
          <img
            src={FooterLogo}
            alt=""
            className="h-[28.4px] w-[136px] mb-[20px]"
          />
          <strong className="text-[20px] text-[#DADCE0]">
            Elevate your home <br /> with smart technology.
          </strong>
        </div>

        <ul className="text-white h-[275px] w-[218.33px]">
          <p className="text-[17px] mb-[20px] font-medium">Company</p>
          {companyArr.map((data) => (
            <li key={data.id} className="mb-[5px] text-[#AAAEB6] text-[15px]">
              {data.Name}{" "}
            </li>
          ))}
        </ul>

        <ul className="text-white h-[275px] w-[218.33px]">
          <p className="text-[17px] mb-[20px] font-medium">Company</p>
          {resourcesArr.map((data) => (
            <li key={data.id} className="mb-[5px] text-[#AAAEB6] text-[15px]">
              {data.Name}{" "}
            </li>
          ))}
        </ul>

        <div className="w-[436.66px] h-[275px] ">
          <p className="text-[17px] font-semibold text-white mb-[20px]">
            Subscribe to our newsletter
          </p>
          <p className="mb-[20px] text-[15px] text-[#DADCE0]">
            Sign up our newsletter and receive 10% off your first order!
          </p>
          <form action="" className="relative">
            <input
              type="text"
              placeholder="Email"
              className="text-white py-[12px] pr-[40px] pl-[17px] border  border-[#3DADCE0] h-[50px] w-[406.66px] bg-[#2f3c44] rounded-lg outline-none"
            />
            <div className="absolute left-[23rem] top-0 flex">
              <div className="w-px h-[3.1rem] bg-white "></div>

              <button className="text-[#DADCE0] w-9 px-3 ">
                <FaArrowRightLong />
              </button>
            </div>
          </form>
          <div className="mt-[10px]">
            <input type="checkbox" className="mr-[8px] text-[#DADCE0]" />
            <label htmlFor="" className="text-[#DADCE0]">
              I agree to receiving marketing emails and special deals
            </label>
          </div>
        </div>
      </div>
      <div className="px-[50px] mx-[70px] mt-[40px]">
        <hr className="py-[15px] border-gray-500" />
        <div className="h-[px]">
          <p className="text-[12px] text-[#AAAEB6]">English</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[#DADCE0] text-[14px]">
            © {new Date().getFullYear()} Vision - Main, All rights reserved.
            <a href="https://bitcode.pro/">
              <u>Powered By Bitcode</u>
            </a>
          </p>
          <CreditCard />
        </div>
      </div>
    </div>
  );
};

export default Footer;
