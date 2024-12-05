import promotion1 from "@/assets/promotion-1.png";
import promotion2 from "@/assets/promotion-2.png";
import promotion3 from "@/assets/promotion-3.png";

import FeatureProductsCard from "@/components/FeatureProducts/FeatureProductsCard";

export const featureArray = [
  {
    id: 1,
    title: "Up to 50% off on accessories",
    img: promotion1,
  },
  {
    id: 2,
    title: "Use automation to save energy",
    img: promotion2,
  },
  {
    id: 3,
    title: "Enjoy a greater level of home security",
    img: promotion3,
  },
];
const FeatureProducts = () => {
  return (
    <div className="w-full mx-auto pt-[30px] pb-[60px]">
      <div className="flex flex-row gap-5 justify-between">
        {featureArray.map((data) => (
          <p key={data.id}>
            <FeatureProductsCard title={data.title} img={data.img} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
