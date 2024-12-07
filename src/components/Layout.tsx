import HeaderComponent from "@/components/HeaderComponent";
import CarouselBanner from "@/components/CarouselBanner";
import FeatureProducts from "@/components/FeatureProducts/FeatureProducts";
import BestSeller from "@/components/ProductSlider";
import FooterComponent from "@/components/FooterComponent";
import CartSidebar from "@/components/CartSidebar";
import InfoNav from "@/components/InfoNav";
import BestSellerIntro from "@/components/FeatureProducts/BestSellerIntro";
import Quotes from "@/components/Quotes";
import ProductSummery from "@/components/ProductSummery";
import DemoProducts from "@/components/DemoProducts";
import Marquee from "@/components/Marquee";
import { showHide, productDialog } from "@/components/AtomsConfig";
import { useAtom } from "jotai";
import ProductDialogBox from "./ProductDialogBox";
import AntDesignTest from "./AntDesignTest";

const AllComponents = () => {
  const [show] = useAtom(showHide);
  const [dialog] = useAtom(productDialog);
  const blurEffect = show ? "blur-[6px]" : "";

  return (
    <div className="relative font-roboto w-full top-0">

      <div className={`fixed h-full z-20 transition-all duration-500 right-0 ${show ? "w-[540px] opacity-100" : "w-0 opacity-0"}`}>
        <CartSidebar />
      </div>

      <InfoNav />
      <hr />
      <HeaderComponent className={blurEffect} />
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
        {dialog && <ProductDialogBox />}
      </div>
      <FooterComponent className={blurEffect} />
      <AntDesignTest />
    </div>
  );
};

export default AllComponents;
