import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
  videoData: JSON.parse(localStorage.getItem("videoData")) || null, // load videoData if present in localStorage
  themeMode: "light",
  isVideoPage: true,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen; //Check menu open
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    setVideoData: (state, action) => {
      state.videoData = action.payload;
      localStorage.setItem("videoData", JSON.stringify(action.payload)); // Save videoData to local storage
    },
    clearVideo: (state) => {
      state.videoData = null;
      localStorage.removeItem("videoData"); // Clear videoData to local storage
    },
    toggleTheme: (state, action) => {
      state.themeMode = action.payload;
      localStorage.setItem("themeData", JSON.stringify(action.payload));
    },
    toggleVideoPageTrue: (state) => {
      state.isVideoPage = true; // to make menu relative for video page
    },
    toggleVideoPageFalse: (state) => {
      state.isVideoPage = false; // to make menu relative for video page
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  setVideoData,
  clearVideo,
  toggleTheme,
  toggleVideoPageTrue,
  toggleVideoPageFalse,
} = appSlice.actions;
export default appSlice.reducer;
