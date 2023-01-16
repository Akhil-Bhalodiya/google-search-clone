import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const { setImageSearch } = useContext(Context);
  const [selectedMenu, setSelectedMenu] = useState("All");

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setSelectedMenu(menuItem.name);
    setImageSearch(isTypeImage ? true : false);
  };
  return (
    <div
      className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-[#ebebeb] flex md:block
       flex-col items-center sticky bg-white"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex grow items-center">
            <Link to="/">
            <img className="hidden md:block w-[92px] mr-10" src={Logo} />
            </Link>
         
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3 ">
        {menu.map((menu, Index) => (
          <span
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative
             ${selectedMenu === menu.name ? "text-[#1a73e8]" : ""}`}
            key={Index}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;


// AIzaSyBshKCOxf_apDWPtC6AO8Rugnc3zOP3q2E
// cx=70ed9b59a42574ad3