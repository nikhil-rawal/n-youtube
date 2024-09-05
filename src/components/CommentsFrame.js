import React, { useEffect } from "react";
import { yt_comments_link } from "../utils/constants";

const CommentsFrame = ({ videoID }) => {
  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = async () => {
    const getData = await fetch(
      `https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_${videoID}&key=AIzaSyC1OVs3W1iYbEzdPljF-2bxp3RQDXPI3k0`
    );
    console.log("cmnt111", getData);
    const getJson = await getData.json();
    console.log("cmts", getJson);
  };

  return <div>CommentsFrame</div>;
};

export default CommentsFrame;
