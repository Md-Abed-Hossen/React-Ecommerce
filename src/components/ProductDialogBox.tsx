import demoImg from "../assets/p12.png";
import { RxCross2 } from "react-icons/rx";
import { productDialog } from "./AtomsConfig";
import { useAtom } from "jotai";

const Modal = () => {
  const [dialog, setDialog] = useAtom(productDialog);
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
              src={demoImg}
              alt="Product Image"
              className="h-[520px] w-[416px] rounded-2xl"
            />
          </div>
          <div className="flex flex-col h-[520px] w-[480px] justify-between">
            <div className="flex flex-col items-start space-y-4">
              <p className="text-[11px] text-[303C43] font-medium">title</p>

              <p className="text-[34px] text-[303C43] font-medium">Name</p>
              <p className="text-[20px] text-[303C43] font-medium">$20</p>
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
                smart devices, allowing users to control lights, thermostats,
                security cameras, and even door locks from a single voice
                interface. Often stylish and compact, these speakers fit
                seamlessly into any room, combining convenience, home
                automation, and sound quality into one integrated device.
              </p>
            </div>

            <div className="flex gap-3 text-white font-medium bottom-0">
              <button className="h-[50px] w-[233px] bg-[#3F72E5] rounded-3xl">
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

export default Modal;
