import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import icons from "../ultis/icons";
import path from "../ultis/path";
import * as actions from "../store/actions";
import { GrClose } from "react-icons/gr";

const { FiSearch } = icons;

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSearch = async (e) => {
    if (e.keyCode === 13) {
      dispatch(actions.search(keyword));
      navigate({
        pathname: `/${path.SEARCH}/${path.ALL}`,
        search: createSearchParams({
          q: keyword,
        }).toString(),
      });
    }
  };
  return (
    <div className="w-full relative flex items-center">
      {keyword && (
        <span
          className="absolute right-[16px] cursor-pointer sm:right-1"
          onClick={() => setKeyword("")}
        >
          <GrClose />
        </span>
      )}
      <span className="h-10 pl-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-500">
        <FiSearch size={24} />
      </span>
      <input
        type="text"
        className="outline-none px-4 bg-[#DDE4E4] py-2 w-full rounded-r-[20px] h-10 text-gray-500 "
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default Search;
