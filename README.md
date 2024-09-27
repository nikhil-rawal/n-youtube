# **[n-youtube](https://n-youtube.netlify.app)**

n-youtube is a ReactJS-based web application that aims to clone the core functionalities of YouTube. This project is optimized for large screen devices like laptops and desktops and will be optimized for small screens in future.

## Overview

- **Framework**: ReactJS
- **State Management**: Redux
- **Styling**: Tailwind CSS
- **Icons**: react-icons
- **Hosting**: Netlify
- **API**: YouTube Public API

## Features

1. **Top Videos**: On page load, the YouTube API fetches the top 50 videos in Canada. The country can be changed to others like India, USA, etc.
2. **GitHub Profile Link**: The first thumbnail contains a link to my GitHub profile as a higher-order component, followed by YouTube's top videos.
3. **Day/Night Mode**: Implemented using Redux. It adapts to system preferences but can be overridden with a single click.
4. **Search Bar**: Includes debouncing with a 300ms delay to ensure fast performance. 
   - **Debouncing**: A technique to limit the rate at which a function executes. For example, in a search bar, debouncing ensures that the search function is called only after the user has stopped typing for a specified time (300ms in this case).
5. **Search Suggestions**: Displays search suggestions as a list. Hovering over suggestions shows more related suggestions. Only 10 suggestions are shown at a time, and navigation through suggestions is possible using arrow keys.
6. **Search Results**: On submitting the search query or pressing enter, the YouTube search API fetches the top 50 results.
7. **Watch Page**: Clicking on a thumbnail navigates to `WatchPage.js`, where detailed video information and top 50 comments are displayed. Infinite nested comments are supported, and users can reply to comments.
8. **Live Chat**: A dummy live chat feature on the right side of `WatchPage.js` simulates YouTube's live chat, with messages popping up every 3000ms. Users can also type their messages.