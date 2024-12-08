import { features } from '.@/components/static/ComapnyInfo'
 
import FeatureProductsCard from "@/components/FeatureProducts/FeatureProductsCard";

const FeatureProducts = () => {
  return (
    <section className="w-full mx-auto pt-[30px] pb-[60px]">
      <div className="flex flex-row gap-5 justify-between">
        {features.map((data) => (
          <p key={data.id}>
            <FeatureProductsCard title={data.title} img={data.img} />
          </p>
        ))}
      </div>
    </section>
  );
};

export default FeatureProducts;
