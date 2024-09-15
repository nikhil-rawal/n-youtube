export const REACT_APP_YTKEY = "AIzaSyC1OVs3W1iYbEzdPljF-2bxp3RQDXPI3k0";
export const yt_api_link =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  REACT_APP_YTKEY;

export const github_api_link = "https://api.github.com/users/nikhil-rawal";

export const yt_search_link =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const yt_comments_link =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const yt_inputSearch_link = (query, apiKey) => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apiKey}`;
};

// export const yt_inputSearch_link = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${}&key=${REACT_APP_YTKEY}`

// export const yt_search_link =
//   "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=";

//   https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyC1OVs3W1iYbEzdPljF-2bxp3RQDXPI3k0

// https://www.googleapis.com/youtube/v3/comments/watch?v=mX7qyX7NpiM

// https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_mX7qyX7NpiM&key=AIzaSyC1OVs3W1iYbEzdPljF-2bxp3RQDXPI3k0
