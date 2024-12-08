import logo from "@/assets/logo.png";
import { BsPerson } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { atom, useAtom } from "jotai";
import SearchResult from "@/components/SearchResult";
import { showHide } from "@/components/AtomsConfig";
import { value } from "../components/AtomsConfig";
import { filterText } from "../components/AtomsConfig";
import { searchValue } from "../components/AtomsConfig";

const Header = ({ className }) => {
  const [search, setSearch] = useAtom(searchValue);
  const [show, setShow] = useAtom(showHide);
  const [category, setCategory] = useAtom(filterText);
  const [count] = useAtom(value);

  console.log("serachngin", search);

  const headerArr = [
    "Features",
    "Shop",
    "Doorbell",
    "Security",
    "Accessories",
    "Journal",
    "Our Story",
    "Vendors",
    "Contact",
  ];

  const FirstLinks = headerArr.slice(0, 6);
  const SecondLinks = headerArr.slice(6);

  const viewCard = () => {
    setShow(!show);
  };

  return (
    <div className={`w-full bg-[#f5f5f5] sticky top-0 z-10 ${className}`}>
      <div className="flex flex-col gap-3 w-[1280px] mx-auto pt-[10px] ">
        <div className=" flex justify-between items-center ">
          <img src={logo} alt="" className="h-6" />
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                className="border-2 text-sm text-left pr-[140px] py-[11px] rounded-md placeholder-gray-600 px-5 bg-[#e7e8ea]
              focus:bg-white"
                onChange={(e) => setSearch(e.target.value)}
              />
              <GoSearch className="absolute top-3 right-3 text-xl cursor-pointer" />
              {Boolean(search.length) && (
                <div className="absolute w-full h-[240px] z-10">
                  <SearchResult search={search} />
                </div>
              )}
            </div>
            <BsPerson className="text-2xl cursor-pointer" />

            <IoCartOutline
              className="text-2xl cursor-pointer"
              onClick={() => viewCard()}
            />
            <span className="absolute px-2 py-1 text-xs rounded-full top-2 right-[6.3rem] font-semibold bg-black text-white">
              {count}
            </span>
          </div>
        </div>

        <nav className="pb-5 flex justify-between">
          <div className="inline-flex gap-10">
            {FirstLinks.map((data, index) => (
              <button
                onClick={() => setCategory(data.toLocaleLowerCase())}
                key={index}
                className={`
        // font-bold text-sm no-underline text-[#535b62] relative hover:opacity-100 
        // before:transition-all before:duration-300 before:content-[''] before:h-[1px] before:bg-[#1c6de7e0] before:absolute before:bottom-[0px] before:w-0 hover:before:w-full cursor-pointer hover:text-[#1c6de7e0]
        ${category == data.toLocaleLowerCase() && "text-[#1c6de7e0]"}
      `}
              >
                {data}
              </button>
            ))}
          </div>
          <div className="inline-flex gap-10 pl-10">
            {SecondLinks.map((data, index) => (
              <p
                key={index}
                className="text-[#9b9fa0] hover:text-slate-700 font-bold cursor-pointer"
              >
                {data}
              </p>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
