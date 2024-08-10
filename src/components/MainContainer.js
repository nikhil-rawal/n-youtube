import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div className={`m-3 p-3`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
