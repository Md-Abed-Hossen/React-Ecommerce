import Header from "@/components/Header";
import CarouselBanner from "@/components/CarouselBanner";
import FeatureProducts from "@/components/FeatureProducts/FeatureProducts";
import BestSeller from "@/components/ProductSlider";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import InfoNav from "@/components/InfoNav";
import BestSellerIntro from "@/components/FeatureProducts/BestSellerIntro";
import Quotes from "@/components/Quotes";
import ProductSummery from "@/components/ProductSummery";
import DemoProducts from "@/components/DemoProducts";
import Marquee from "@/components/Marquee";
import { showHide } from "@/components/AtomsConfig";
import { useAtom } from "jotai";

const AllComponents = () => {
  const [show] = useAtom(showHide);
  const blurEffect = show ? "blur-[6px]" : "";

  return (
    <div className="relative font-roboto w-full top-0">
      {show && (
        <div className="fixed h-full z-20 transition-all duration-300 right-0 w-[540px]">
          <CartSidebar />
        </div>
      )}

      <InfoNav />
      <hr />
      <Header className={blurEffect} />
      <div className={`bg-[#f5f5f5] w-[1280px] mx-auto relative ${blurEffect}`}>
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
