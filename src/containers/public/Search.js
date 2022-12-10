import React from "react";
import { Outlet } from "react-router-dom";
import { searchMenu } from "../../ultis/menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const notActiveStyle = "px-4 hover:text-main-500 font-semibold cursor-pointer";
const activeStyle =
  "px-4 hover:text-main-500 font-semibold cursor-pointer border-b-2 border-main-500 h-[52px] flex items-center";
const Search = () => {
  const { keyword } = useSelector((state) => state.music);
  return (
    <div>
      <div className="flex h-50[px] mb-7 items-center text-sm border-b border-gray-400 pl-[60px] pb-1 sm:pl-8">
        <span className="text-[24px] font-bold pr-6 sm:text-[16px]">
          Kết Quả
        </span>
        <div className="flex items-center sm:text-[8px]">
          {searchMenu.map((item) => (
            <NavLink
              key={item.path}
              to={`${item.path}?=${keyword.replace("", "+")}`}
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Search;
