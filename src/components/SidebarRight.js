import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import icons from "../ultis/icons";
import { SongItem } from "./";
import { apiGetDetailPlaylist } from "../apis";
import { Scrollbars } from "react-custom-scrollbars-2";

const SidebarRight = () => {
  const [playList, setPlayList] = useState();
  const { curSongData, curAlbumId } = useSelector((state) => state.music);
  useEffect(() => {
    const fetchDetailPlaypist = async () => {
      const response = await apiGetDetailPlaylist(curAlbumId);
      if (response.data?.err === 0)
        setPlayList(response.data.data?.song?.items);
    };
    if (curAlbumId) fetchDetailPlaypist();
  }, [curAlbumId]);
  return (
    <div className="flex flex-col text-xs w-full ">
      <div className="h-[70px] w-full flex justify-center items-center">
        <div className="flex flex-auto bg-main-200 rounded-l-lg rounded-r-lg py-[6px] px-[6px] cursor-pointer">
          <span
            className={
              "py-[5px] text-base flex flex-1 justify-center items-center rounded-l-full rounded-r-full"
            }
          >
            Danh sách phát
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen">
        <SongItem
          thumbnail={curSongData?.thumbnail}
          title={curSongData?.title}
          artists={curSongData?.artistsNames}
          sid={curSongData?.encodeId}
          sm
          style="bg-main-500 text-white"
        />
        <div className="flex flex-col text-black pt-[15px] px-2 pb[5px]">
          <span className="text-sm font-blod">Tiếp theo</span>
          <span className="opacity-70 text-xs flex gap-1">
            <span>Từ playlist</span>
            <span className="font-semibold text-main-500">
              {curSongData?.album?.title}
            </span>
          </span>
        </div>
        {playList && (
          <div className="flex flex-col h-[400px]  ">
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              {playList?.map((item) => (
                <SongItem
                  key={item.encodeId}
                  thumbnail={item?.thumbnail}
                  title={item?.title}
                  artists={item?.artistsNames}
                  sid={item?.encodeId}
                  sm
                />
              ))}
            </Scrollbars>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarRight;
