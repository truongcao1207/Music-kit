import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Lists } from "../../components";
import * as actions from "../../store/actions";
import { Loading } from "../../components";
const SearchSongs = () => {
  const { searchData } = useSelector((state) => state.music);
  console.log(searchData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getSearchSongs(searchData?.top?.playlistId));
  }, [searchData]);
  return (
    <div className="px-24 sm:px-1">
      <Lists />
    </div>
  );
};

export default SearchSongs;
