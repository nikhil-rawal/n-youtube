import React, { useEffect } from "react";
import { yt_comments_link } from "../utils/constants";

const CommentsFrame = ({ videoID }) => {
  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = async () => {
    const getData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoID}&key=AIzaSyC1OVs3W1iYbEzdPljF-2bxp3RQDXPI3k0`
    );
    // later on add - &maxResults=100, order=time || order=elevance,

    const getJson = await getData.json();
    console.log("comments", getJson);
  };

  return <div>CommentsFrame</div>;
};

export default CommentsFrame;
