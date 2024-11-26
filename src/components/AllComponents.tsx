import Header from "./Header"
import CarouselBanner from "./CarouselBanner"
import FeatureProducts from "./FeatureProducts/FeatureProducts"
import BestSeller from "./BestSeller"
import BestProducts from "./BestProducts"
import BestProductsCard from "./BestSellerCard"


const AllComponents = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Header/>
      <CarouselBanner/>
      <FeatureProducts/>
      <BestSeller/>
    </div>
  )
}

export default AllComponents
