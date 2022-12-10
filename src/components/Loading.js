import React from "react";
import { memo } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return <InfinitySpin width="200" color="#4fa94d" />;
};

export default memo(Loading);
