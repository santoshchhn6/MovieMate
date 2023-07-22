import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface videoPlayerState {
  show_video_player: boolean;
  videoId: string;
}

const initialState: videoPlayerState = {
  show_video_player: false,
  videoId: "",
};

const videoPlayerSlice = createSlice({
  name: "videoPlayer",
  initialState,
  reducers: {
    showVideoPlayer(state) {
      state.show_video_player = true;
    },
    hideVideoPlayer(state) {
      state.show_video_player = false;
    },
    setVideoId(state, action: PayloadAction<string>) {
      state.videoId = action.payload;
    },
  },
});

export const { showVideoPlayer, hideVideoPlayer, setVideoId } =
  videoPlayerSlice.actions;
export default videoPlayerSlice;
