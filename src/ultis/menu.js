import icons from "./icons";

const { MdOutlineLibraryMusic, MdOutlineFeed, TbChartArcs, HiOutlineChartPie } =
  icons;
export const sidebarMenu = [
  {
    path: "",
    text: "Khám phá",
    end: true,
    icons: <TbChartArcs size={24} />,
  },
  {
    path: "mymusic",
    text: "Cá nhân",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "MusicChart",
    text: "MusicChart",
    icons: <HiOutlineChartPie size={24} />,
  },
  {
    path: "Follow",
    text: "Theo dõi",
    icons: <MdOutlineFeed size={24} />,
  },
];

export const searchMenu = [
  {
    path: "tat-ca",
    text: "TẤT CẢ",
  },
  {
    path: "bai-hat",
    text: "BÀI HÁT",
  },
  {
    path: "playlist",
    text: "PLAYLIST/ALBUM",
  },
  {
    path: "Follow",
    text: "Theo dõi",
  },
];
