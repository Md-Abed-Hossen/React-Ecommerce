import MoonStars from '@/assets/MoonStars.png';
import automate from '@/assets/automate.png';
import Confetti from "@/assets/Confetti.png";

const Marquee = () => {
  return (
    <div className="relative h-[125px] overflow-hidden bg-gray-100 w-full py-[20px]">
      <div className="relative flex overflow-x-hidden">
        {/* First Marquee */}
        <div className="flex animate-marquee whitespace-nowrap items-center text-[48px] px-4">
          <div className="flex items-center mx-6">
            <img
              src={automate}
              alt="Automate everything"
              className="h-[48px] mr-4"
            />
            <span className="text-gray-500 font-semibold">Automate everything</span>
          </div>
          <div className="flex items-center mx-6">
            <img
              src={Confetti}
              alt="Enjoy our future"
              className="h-[48px] mr-4"
            />
            <span className="text-gray-500 font-semibold">Enjoy our future</span>
          </div>
          <div className="flex items-center mx-6">
            <img
              src={MoonStars}
              alt="Set up your home for the night"
              className="h-[48px] mr-4"
            />
            <span className="text-gray-500 font-semibold">Set up your home for the night</span>
          </div>
        </div>

        {/* Second Marquee */}
        <div className="absolute top-0 px-2 flex animate-marquee2 whitespace-nowrap items-center text-[48px]">
          <div className="flex items-center mx-6">
            <img
              src={automate}
              alt="Automate everything"
              className="h-[48px] mr-4"
            />
            <span className="text-gray-500 font-semibold">Automate everything</span>
          </div>
          <div className="flex items-center mx-6">
            <img
              src={Confetti}
              alt="Enjoy our future"
              className="h-[48px] mr-4"
            />
            <span className="text-gray-500 font-semibold">Enjoy our future</span>
          </div>
          <div className="flex items-center mx-6">
            <img
              src={MoonStars}
              alt="Set up your home for the night"
              className="h-[48px] mr-4"
            />
            <span className="text-gray-500 font-semibold">Set up your home for the night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
