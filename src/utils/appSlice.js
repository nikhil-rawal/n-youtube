import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
  videoData: JSON.parse(localStorage.getItem("videoData")) || null, // load videoData if present in localStorage
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
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
  },
});

export const { toggleMenu, closeMenu, openMenu, setVideoData, clearVideo } =
  appSlice.actions;
export default appSlice.reducer;
