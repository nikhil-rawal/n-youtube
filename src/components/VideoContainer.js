import React, { useState, useEffect } from "react";
import { yt_api_link, github_api_link } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVideoData } from "../utils/appSlice";

const VideoContainer = () => {
  const [allVideos, setAllVideos] = useState("");
  const [userData, setUserData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    getUser();
    // Later - add if api limit reached, what to show - or may use another API key???
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(yt_api_link);
      const json = await data?.json();
      setAllVideos(json?.items);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
    return undefined;
  };

  const getUser = async () => {
    try {
      const data = await fetch(github_api_link);
      const json = await data?.json();
      json && setUserData(json);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
    return undefined;
  };

  const HighVideoCard = (VideoCard, customProps) => {
    return (props) => {
      return (
        <div>
          <VideoCard {...props} {...customProps} />
        </div>
      );
    };
  };

  const AdCard = HighVideoCard(VideoCard);
  // const checkOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div className={"flex flex-wrap m-2 p-2"}>
      {
        <>
          <a
            href="https://github.com/nikhil-rawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AdCard
              key={userData?.id}
              customTitle={userData?.name}
              customThumbnail={userData?.avatar_url}
              customAlt={userData?.login}
              customBio={userData?.bio}
            />
          </a>
        </>
      }
      {allVideos?.length > 1 &&
        allVideos?.map((videoItem) => (
          <Link
            to={`/WatchPage?v=${videoItem?.id}`}
            key={videoItem?.id}
            onClick={() => dispatch(setVideoData(videoItem))} //sending data to appSlice - videoData
          >
            <VideoCard info={videoItem} key={videoItem?.id} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
