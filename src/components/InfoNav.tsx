import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";

const InfoNav = () => {
  const navLinks = ["About", "Blog", "Support", "F.A.Q.", "Contact"];
  return (
    <div className="flex justify-between text-[#303C43] py-[10px] font-roboto text-[12px] w-[1280px] mx-auto h-[40px]">
      <div className="flex gap-5">
        {navLinks.map((data, index) => (
          <a key={index} href="">
            {data}
          </a>
        ))}
      </div>
      <div className="flex justify-between gap-3 text-[18px] text-[#303C43]">
        <FaFacebookSquare />
        <FaXTwitter />
        <FaInstagram />
        <AiOutlineTikTok />
      </div>
    </div>
  );
};

export default InfoNav;
