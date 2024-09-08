import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, toggleVideoPageFalse } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  useEffect(() => {
    dispatch(openMenu());
    dispatch(toggleVideoPageFalse());
  }, []);
  return (
    <div className={!isMenuOpen ? `ml-44` : undefined}>
      <div className="ml-5 overflow-x-scroll">
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
