import demoImg from "../assets/p12.png";
import { RxCross2 } from "react-icons/rx";
import { productDialog, value } from "./AtomsConfig";
import { atom, useAtom } from "jotai";
import { cardData } from "../components/AtomsConfig";

export const cart = atom([]);

const ProductDialogBox = () => {
  const [dialog, setDialog] = useAtom(productDialog);
  const [data, setData] = useAtom(cardData);
  const [cartdata, setCartdata] = useAtom(cart);

  let [count, setCount] = useAtom(value);

  // const handleCart = () => {
  //   setDialog(false);
  //   //  setCartdata(prevConf => {
  //   //    prevConf.push(data)
  //   //    return prevConf
  //   //   })
  // };

  const handleCartButton = () => {
    setCartdata(data);
    setCount(count + 1);
    setDialog(false);
  };

  return (
    <div className="relative z-10">
      <div
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500/75"
      >
        <div className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all w-[1160px] h-[666px] flex justify-between p-20">
          <div>
            <img
              src={data.img}
              alt="Product Image"
              className="h-[520px] w-[416px] rounded-2xl"
            />
          </div>
          <div className="flex flex-col h-[520px] w-[480px] justify-between">
            <div className="flex flex-col items-start space-y-4">
              <p className="text-[11px] text-[303C43] font-medium">
                {data.title}
              </p>

              <p className="text-[34px] text-[303C43] font-medium text-start">
                {data.name}
              </p>
              <p className="text-[20px] text-[303C43] font-medium">
                ${data.price}
              </p>
              <p className="text-[12px] text-[303C43] font-medium">
                Tax included. Shipping calculated at checkout
              </p>
              <p className="text-[15px] text-[303C43] font-medium text-start">
                A smart home speaker is a voice-activated device designed to
                perform various tasks, control compatible smart home devices,
                and offer high-quality audio playback. These speakers come
                equipped with virtual assistants (like Alexa, Google Assistant,
                or Siri) that can answer questions, provide updates, play music,
                set reminders, and more—all through simple voice commands. Many
                smart home speakers also function as a central hub for other
                smart devices.
              </p>
            </div>

            <div className="flex gap-3 text-white font-medium bottom-0">
              <button
                className="h-[50px] w-[233px] bg-[#3F72E5] rounded-3xl"
                onClick={() => handleCartButton()}
              >
                Add to cart
              </button>
              <button className="h-[50px] w-[233px] bg-[#303C43] rounded-3xl">
                Buy it now
              </button>
            </div>
          </div>
          <RxCross2
            className="text-[20px] cursor-pointer absolute top-4 right-4"
            onClick={() => setDialog(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDialogBox;
