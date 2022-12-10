import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Player, Head, SidebarRight, Header, Loading } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
// import { HidingHeader } from "hiding-header-react";
const Public = () => {
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(true);
  const { isLoading } = useSelector((state) => state.app);

  return (
    <div className="w-full relative h-screen flex flex-col bg-main-300  ">
      <div className="w-full h-[40px]  ">
        <Head />
      </div>
      <div className="w-full h-full flex flex-auto">
        <div className="flex-auto relative flex flex-col ">
          {isLoading && (
            <div className="absolute top-0 bottom-0 z-20 left-0 right-0 bg-main-200 flex items-center justify-center">
              <Loading />
            </div>
          )}
          <div className="h-[60px] flex-none px-[59px] flex items-center sm:w-96">
            <Header />
          </div>
          <div className="flex-auto w-full">
            <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
              <Outlet />
            </Scrollbars>
          </div>
        </div>
        {isShowRightSidebar && (
          <div className="w-[329px]  flex-none  animate-slide-left animate-slide-right  sm:hidden">
            <SidebarRight />
          </div>
        )}
      </div>
      <div className="fixed z-50 bottom-0 left-0 right-0 h-[90px]">
        <Player setIsShowRightSidebar={setIsShowRightSidebar} />
      </div>
    </div>
  );
};

export default Public;
