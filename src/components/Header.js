import React, { useState } from "react";
import icons from "../ultis/icons";
import { Search } from "./";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons;

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLogout = () => {};

  return (
    <div className="flex justify-between w-full items-center  ">
      <div className="flex gap-60 w-full items-center sm:gap-10 ">
        <div className="flex gap-6 text-gray-400 ">
          <button onClick={() => navigate(-1)}>
            <HiArrowNarrowLeft size={24} />
          </button>
          <button onClick={() => navigate(1)}>
            <HiArrowNarrowRight size={24} />
          </button>
        </div>
        <div className="w-1/2 sm:w-[140px]">
          <Search />
        </div>
      </div>
      {user ? (
        <div>
          <p className="">
            Hi, <span> {user} </span>
          </p>
          <Link to="/logout" className="" onClick={handleLogout}>
            Log out
          </Link>
        </div>
      ) : (
        <div className="pl-2">
          <Link
            to="/login"
            className="bg-main-500 text-white px-2 py-1 rounded-2xl"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
