import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isLoginModalOpen: boolean;
}

const initialState: AppState = {
  isLoginModalOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoginModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isLoginModalOpen = action.payload;
    },
  },
});

export const { setIsLoginModalOpen } = appSlice.actions;
export default appSlice.reducer;
