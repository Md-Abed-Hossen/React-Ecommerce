import { FaAngleRight } from "react-icons/fa6";

const FeatureProductsCard = ({ title, img }) => {
  return (
    <div className="h-[130px] w-[418px] bg-white rounded-lg flex justify-between px-3 py-3 drop-shadow-lg">
      <div className=" flex flex-col gap-5 items-start pt-4 pl-4">
        <p className="font-bold text-xl">{title}</p>
        <div className="flex items-center text-blue-500 gap-x-1">
          <button className="font-semibold">Shop Now</button>
          <FaAngleRight />
        </div>
      </div>
      <div>
        <img src={img} alt="" className="rounded-md size-[110px]" />
      </div>
    </div>
  );
};

export default FeatureProductsCard;
