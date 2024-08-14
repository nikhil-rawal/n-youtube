import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: true,
  videoData: null,
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
    },
    clearVideo: (state) => {
      state.videoData = null;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu, setVideoData, clearVideo } =
  appSlice.actions;
export default appSlice.reducer;
