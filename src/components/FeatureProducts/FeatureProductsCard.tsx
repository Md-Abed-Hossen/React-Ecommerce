import { FaAngleRight } from "react-icons/fa6";

interface FeatureCardProps {
  title: string;
  img: string;
}

const FeatureProductsCard: React.FC<FeatureCardProps> = ({ title, img }) => {
  return (
    <div className="h-[140px] w-[406.66px] bg-white rounded-2xl flex justify-between px-3 py-3 shadow-custom-multi">
      <div className=" flex flex-col gap-5 items-start px-[15px] py-[12px] ">
        <p className="font-inter text-[#303c43] font-bold text-xl">{title}</p>
        <div className="flex items-center text-blue-500 gap-x-1">
          <button className="font-semibold">Shop Now</button>
          <FaAngleRight />
        </div>
      </div>
      <div>
        <img src={img} alt="Feature products" className="rounded-md h-[116px] w-[170px]" />
      </div>
    </div>
  );
};

export default FeatureProductsCard;
