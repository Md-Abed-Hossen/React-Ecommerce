import Header from "@/components/Header";
import CarouselBanner from "@/components/CarouselBanner";
import FeatureProducts from "@/components/FeatureProducts/FeatureProducts";
import BestSeller from "@/components/BestSeller";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import InfoNav from "@/components/InfoNav";
import BestSellerIntro from "@/components/FeatureProducts/BestSellerIntro";
import Quotes from "@/components/Quotes";
import ProductSummery from "@/components/ProductSummery";
import DemoProducts from "@/components/DemoProducts";
import Marquee from "@/components/Marquee";
import { showhide } from "@/components/AtomsConfig";
import { useAtom } from "jotai";

const AllComponents = () => {
  const [show] = useAtom(showhide);

  return (
    <div className="relative font-roboto w-full top-0">
      <div
        className={`fixed h-full z-20 transition-all  duration-300 right-0  ${
          show ? " w-[540px] " : "w-0 "
        }`}
      >
        <CartSidebar />
      </div>

      <InfoNav />
      <hr />
      <Header className={`${show && "blur-[6px]"}`} />
      <div
        className={`bg-[#f5f5f5] w-[1280px] mx-auto relative ${
          show && "blur-[6px]"
        }`}
      >
        <CarouselBanner />
        <FeatureProducts />
        <BestSellerIntro />
        <BestSeller />
        <hr />
        <Quotes />
        <ProductSummery />
        <Marquee />
        <DemoProducts />
      </div>
      <Footer />
    </div>
  );
};

export default AllComponents;
