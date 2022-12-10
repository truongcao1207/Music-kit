import React from "react";
import { memo } from "react";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const SongItem = ({
  thumbnail,
  title,
  artists,
  sid,
  releaseDate,
  order,
  percent,
  style,
  sm,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(actions.setCurSongId(sid));
        dispatch(actions.play(true));
      }}
      className={`w-full flex  p-[10px] gap-[10px] justify-between items-center rounded-md cursor-pointer sm:gap-0  ${
        style || "text-black hover:bg-main-200"
      }`}
    >
      <div className="flex gap-4 sm:gap-0 sm:flex-col ">
        {order && (
          <span
            className={`${
              order === 1 ? "text-shadow" : ""
            } text-[rgba(77,34,104,0.9)] text-[32px] m-auto`}
          >
            {order}
          </span>
        )}
        <img
          src={thumbnail}
          alt="thumbnail"
          className={`${
            sm ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
          } object-cover rounded-md sm:w-[100px] sm:h-[100px]`}
        />
        <div className="flex flex-col ">
          <span className="text-sm font-semibold  ">{title}</span>
          <span className="text-xs opacity-70 sm:hidden ">{artists}</span>
          {releaseDate && (
            <span className={`text-xs opacity-70 `}>
              {moment(releaseDate * 1000).fromNow()}
            </span>
          )}
        </div>
      </div>
      {percent && <span>{`${percent}%`}</span>}
    </div>
  );
};

export default memo(SongItem);
