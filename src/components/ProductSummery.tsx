import productImage1 from "@/assets/summery1.jpg"
import productImage2 from "@/assets/summery2.jpg"
import productImage3 from "@/assets/summery3.jpg"

const ProductSummery = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4">
      <div className="bg-white row-span-2 col-span-2 h-[620px] w-[630px] rounded-2xl p-[35px] relative overflow-hidden flex drop-shadow-lg">
        <img
          src={productImage1}
          alt="description"
          className="h-full w-full object-cover absolute top-0 left-0 transform-x transition  hover:scale-110"
        ></img>
        <div className="z-10 flex flex-col items-center">
          <p className="h-[19.2px] w-[560] mb-[20px] text-white">
            SOUND SYSTEMS
          </p>
          <p className="h-[100px] w-[560px] font-semibold text-[2.5rem] font-inter text-center mb-[1.25rem] leading-snug text-[#262f36]">
            Amazing sound. At your command.
          </p>
          <button className="text-[#3f72e5] text-[15px] font-medium">
            Learn More
          </button>
        </div>
      </div>

      <div className=" drop-shadow-lg bg-white row-span-1 col-span-2 rounded-2xl p-[35px] relative overflow-hidden flex">
        <img
          src={productImage2}
          alt=""
          className="absolute w-full h-full object-cover top-0 left-0"
        />
        <div className="z-10 flex flex-col items-start">
          <p className="h-[19.2px] w-[560] mb-[20px]">SECURITY SYSTEMS</p>
          <p className="h-[128px] w-[300.18px] font-medium text-[1.87rem] font-inter mb-[1.25rem] leading-tight text-[#2c2d2e]">
            Bring smart security inside and see what’s happening at home.
          </p>
          <button className="text-[#3f72e5] text-[15px] font-medium">
            Explore
          </button>
        </div>
        </div>

        <div className="drop-shadow-lg bg-gray-500 rounded-2xl relative overflow-hidden">
            <img src={productImage3} alt="" className="h-full w-full  top-0 left-0 absolute"/>
          <p className="absolute text-[28px] font-inter font-bold text-white p-[31px] h-full text-center flex items-center">Remotely manage all of your connected devices</p>
        </div>

        <div className="drop-shadow-lg bg-gray-700 rounded-2xl p-[35px] flex flex-col justify-center items-center">
            <p className="text-center text-[28px] text-white font-bold">Good Hybrid Smartwatches</p>
            <button className="font-bold text-white">Explore</button>
        </div>
      </div>

  );
};

export default ProductSummery;