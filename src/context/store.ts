import { configureStore } from "@reduxjs/toolkit";
import { levelSlice } from "./levelSlice";

export const store = configureStore({
  reducer: {
    level: levelSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
