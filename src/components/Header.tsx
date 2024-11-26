import logo from "../assets/logo.png";
import { BsPerson } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { atom, useAtom } from "jotai";
import SearchResult from "./SearchResult";

export const SearchValue = atom("");
export const ShowHideDiv = atom(false);

const Header = () => {
  const [search, setSearch] = useAtom(SearchValue);
  // const [showHide, setShowHide] = useAtom(ShowHideDiv);
  const HeaderArr = [
    "Features",
    "Shop",
    "Doorbells",
    "Security",
    "Accessories",
    "Journal",
    "Our Story",
    "Vendors",
    "Contact",
  ];

  const FirstLinks = HeaderArr.slice(0, 6);
  const SecondLinks = HeaderArr.slice(6);
  console.log(search);

  return (
    <div className="bg-[#f5f5f5] flex flex-col gap-3 relative">
      <div className="pt-7 px-10 w-[90%] mx-auto flex justify-between items-center ">
        <img src={logo} alt="" className="h-6" />
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything"
              className="border-2 border-black text-sm text-left pr-[140px] py-[11px] rounded-md placeholder-gray-600 px-5 bg-gray-200
              focus:bg-white"
              onChange={(e) => setSearch(e.target.value)}
            />
            <GoSearch className="absolute top-3 right-3 text-xl cursor-pointer" />
            {search.length ? (
              <div className="absolute w-full h-[240px] z-10 ">
                <SearchResult search={search} />
              </div>
            ) : ''}
          </div>
          <BsPerson className="text-2xl cursor-pointer" />
          <IoCartOutline className="text-2xl cursor-pointer" />
        </div>
      </div>
      <nav className="pb-3 px-10 w-[90%] mx-auto flex justify-between">
        <div className="inline-flex gap-10">
          {FirstLinks.map((data, index) => (
            <p
              key={index}
              className="
        font-medium text-sm no-underline text-[#07162d] relative opacity-75 hover:opacity-100 
        before:transition-all before:duration-300 before:content-[''] before:h-[1px] before:bg-[#1c6de7e0] before:absolute before:bottom-[0px] before:w-0 hover:before:w-full cursor-pointer hover:text-[#1c6de7e0]
      "
            >
              {data}
            </p>
          ))}
        </div>
        <div className="inline-flex gap-10 pl-10">
          {SecondLinks.map((data, index) => (
            <p
              key={index}
              className="text-slate-400 hover:text-slate-700 font-medium cursor-pointer"
            >
              {data}
            </p>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
