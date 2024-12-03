import { RxCross2 } from "react-icons/rx";
import { BsCartX } from "react-icons/bs";
import { showhide } from "@/components/AtomsConfig";
import { useAtom } from "jotai";

const CartSidebar = () => {
  const [show,setShow] = useAtom(showhide)
  return (
    <div className="h-full rounded-2xl bg-white flex flex-col absolute w-full">
      <div className="flex justify-between items-center py-[23px] px-[30px] bg">
        <p className="text-[18px] font-inter text-[#303C43] font-semibold">
          Cart
        </p>
        <div className="cursor-pointer text-xl">
          <RxCross2 onClick={()=>setShow(false)}/>
        </div>
      </div>

      <hr />
      {/* <div className="h-full  flex ">
        <div className=" flex flex-col items-center w-full justify-center">
          <BsCartX className="text-[82px] text-blue-600 mb-[45px]" />
          <p className="text-[15px] mb-[20px] text-[#303C43]">
            Your cart is currently empty.
          </p>
          <button className="h-[50px] w-[160px] bg-[#303C43] rounded-3xl text-[1rem] font-medium text-white">
            Start Shopping
          </button>
        </div>
      </div> */}
<div>
  
</div>

    </div>
  );
};

export default CartSidebar;
