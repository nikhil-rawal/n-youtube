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
    <div className={`main-container`}>
      <div className="ml-5">
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
