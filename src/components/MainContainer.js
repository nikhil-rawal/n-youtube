import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const checkOpen = useSelector((state) => state.app.isMenuOpen);
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div className={`mt-12 ml-3 main-container`}>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
