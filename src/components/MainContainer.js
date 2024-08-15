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
    <div className={`m-3 p-3`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
