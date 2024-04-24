import { createSlice } from "@reduxjs/toolkit";

interface LevelState {
  value: number;
}

const initialState: LevelState = {
  value: 0,
};

export const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = levelSlice.actions;
