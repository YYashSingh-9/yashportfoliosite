import { configureStore } from "@reduxjs/toolkit";
import sliceOne from "./sliceOne";

const store = configureStore({
  reducer: { sliceOne: sliceOne.reducer },
});

export default store;
