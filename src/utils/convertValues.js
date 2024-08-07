export const formatNumber = (theNumber) => {
  if (theNumber >= 1e9) {
    return (theNumber / 1e9).toFixed(1) + "B";
  } else if (theNumber >= 1e6) {
    return (theNumber / 1e6).toFixed(1) + "M";
  } else if (theNumber >= 1e3) {
    return (theNumber / 1e3).toFixed(1) + "K";
  } else {
    return theNumber;
  }
};

export const formatTimeAgo = (timestamp) => {
  const now = new Date();
  const postedDate = new Date(timestamp);
  const differenceInSeconds = Math.floor((now - postedDate) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInMonth = 2592000; // Approximate number of seconds in a month
  const secondsInYear = 31536000; // Approximate number of seconds in a year

  let timeAgo;

  if (differenceInSeconds < secondsInMinute) {
    timeAgo = `${differenceInSeconds} seconds ago`;
  } else if (differenceInSeconds < secondsInHour) {
    const minutes = Math.floor(differenceInSeconds / secondsInMinute);
    timeAgo = `${minutes} minutes ago`;
  } else if (differenceInSeconds < secondsInDay) {
    const hours = Math.floor(differenceInSeconds / secondsInHour);
    timeAgo = `${hours} hours ago`;
  } else if (differenceInSeconds < secondsInMonth) {
    const days = Math.floor(differenceInSeconds / secondsInDay);
    timeAgo = `${days} days ago`;
  } else if (differenceInSeconds < secondsInYear) {
    const months = Math.floor(differenceInSeconds / secondsInMonth);
    timeAgo = `${months} months ago`;
  } else {
    const years = Math.floor(differenceInSeconds / secondsInYear);
    timeAgo = `${years} years ago`;
  }

  return timeAgo;
};
