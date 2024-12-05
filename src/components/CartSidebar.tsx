import { RxCross2 } from "react-icons/rx";
import { BsCartX } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { showHide, value } from "@/components/AtomsConfig";
import { useAtom } from "jotai";

const CartSidebar = () => {
  let [count, setCount] = useAtom(value);
  const [show, setShow] = useAtom(showHide);
  return (
    <div className="h-full rounded-2xl bg-white flex flex-col absolute w-full">
      <div className="flex justify-between items-center py-[23px] px-[30px] bg">
        <p className="text-[18px] font-inter text-[#303C43] font-semibold">
          Cart
          <span className="absolute px-2 py-1 text-xs rounded-full top-5 left-16 ">
            {count}
          </span>
        </p>
        <div className="cursor-pointer text-xl">
          <RxCross2 onClick={() => setShow(false)} />
        </div>
      </div>

      <hr />
      {count == 0 ? (
        <div className="h-full  flex ">
          <div className=" flex flex-col items-center w-full justify-center">
            <BsCartX className="text-[82px] text-blue-600 mb-[45px]" />
            <p className="text-[15px] mb-[20px] text-[#303C43]">
              Your cart is currently empty.
            </p>
            <button className="h-[50px] w-[160px] bg-[#303C43] rounded-3xl text-[1rem] font-medium text-white">
              Start Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col top-2 h-full justify-between">
          <div className="px-[30px] flex justify-between pt-2">
            <div className="h-[120px] w-[96px] bg-black"> hi </div>
            <div className="w-[275px] h-[91px] text-[#303C43] flex flex-col justify-between">
              <div className="text-[15px]">name</div>
              <div className="text-[12px]">types</div>
              <div className="flex space-x-5 items-center">
                <div className="w-[80px] h-[36px] px-1 items-center border border-1 rounded-md flex justify-between text-[15px] text-[#303C43]">
                  <button onClick={() => setCount(count - 1)}>-</button>
                  <div>{count}</div>
                  <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <RiDeleteBin6Line
                  className="text-red-500 text-lg cursor-pointer"
                  onClick={() => setCount((count = 0))}
                />
              </div>
            </div>
            <div className="text-[#303C43] text-[15px]">${88 * count}</div>
          </div>

          <div className="p-[30px] h-[228px] flex flex-col gap-2">
            <hr />
            <div className="flex flex-row justify-between">
              <div className="">
                <p>Total</p>
                <p className="text-[#303C43] text-[13px]">
                  Tax included. Shipping calculated at checkout.
                </p>
              </div>
              <p className="text-[20px]">${88*count}</p>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>I agree with the terms and conditions</p>
            </div>
            <a href="" className="text-[#3F72E5] ">
              <u>Add order note</u>
            </a>
            <div className="flex justify-between text-white font-medium">
              <button className="w-[123px] h-[50px] bg-[#303C43] rounded-3xl ">
                View Cart
              </button>
              <button className="w-[347px] h-[50px] bg-[#3F72E5] rounded-3xl">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
