import React from "react";
import { useSelector } from "react-redux";
import { handleNumber } from "../../ultis/fn";
import { List, SectionItem } from "../../components/";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SearchAll = () => {
  const { searchData } = useSelector((state) => state.music);
  return (
    <div className="w-full flex flex-col px-[60px] mb-24 sm:px-1">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-5">Nổi bật</h3>
        <div className="flex gap-8">
          {searchData?.top && (
            <div className="p-[10px] ml-10 bg-main-200 rounded-md flex  items-center">
              <img
                src={searchData.top.thumbnail}
                alt="avatar"
                className={`w-84px] h-[84px] object-cover ${
                  searchData.top.objectType === "artist" && "rounded-full"
                } `}
              />
              <div className="flex flex-col pl-2">
                <span className="mb-[6px]">
                  {searchData.top.objectType === "artist" ? "Nghệ sĩ" : ""}
                </span>
                <span className="text-sm font-semibold">
                  {searchData.top.title || searchData.top.name}
                </span>
                {searchData.top.objectType === "artist" && (
                  <span>
                    {handleNumber(searchData.artists[0]?.totalFollow) +
                      "quan tâm"}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-lg font-bold mb-5">Bài hát</h3>
          <div className="flex justify-between flex-wrap w-full sm:flex-col ">
            {searchData?.songs?.map((item) => (
              <div key={item.encodeId} className="flex-auto w-[45%] sm:w-full">
                <List songData={item} isHideAlbum />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="text-lg font-bold mb-5">Playlist</h3>
          <Swiper
            grabCursor={true}
            spaceBetween={40}
            slidesPerView={"auto"}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              820: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1023: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {searchData?.playlists?.map((item, index) => (
              <SwiperSlide key={item.encodeId} className="flex">
                <SectionItem
                  key={item.encodeId}
                  title={item.title}
                  link={item.link}
                  sortDescription={item.sortDescription}
                  thumbnailM={item.thumbnailM}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="sm:h-56"></div>
    </div>
  );
};

export default SearchAll;
