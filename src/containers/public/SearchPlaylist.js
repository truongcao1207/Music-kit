import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Lists, Section, SectionItem } from "../../components";
import * as actions from "../../store/actions";
const SearchPlaylist = () => {
  const [playLists, setPlayList] = useState([]);
  const { searchData } = useSelector((state) => state.music);
  console.log(searchData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getSearchSongs(searchData?.playlists));
  }, [searchData]);
  return (
    <div className="flex items-start justify-between gap-[28px] flex-wrap px-10">
      {searchData?.playlists.map((item) => (
        <SectionItem
          key={item.encodeId}
          title={item.title}
          link={item.link}
          sortDescription={item.sortDescription}
          thumbnailM={item.thumbnailM}
        />
      ))}
    </div>
  );
};

export default SearchPlaylist;
