import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className={`m-3 p-3`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
