import { createSlice } from "@reduxjs/toolkit";
import twoFrag from "../assets/twoFrag.png";
import ehWater from "../assets/ehwater.png";
import mycrdit from "../assets/myCrdit.png";
import dummyBG from "../assets/dummyBG.png";

const sliceOne = createSlice({
  name: "sliceOne",
  initialState: {
    cardObject_technical: [
      {
        name: "MYCRDIT",
        subtitle: "Local debt management and credit score app.",
        link: "https://mycrdit.netlify.app",
        imgsrc: mycrdit,
      },
      {
        name: "EH WATER",
        subtitle: "Online space to share water problems and solutions.",
        link: "https://eh-water.netlify.app/",
        imgsrc: ehWater,
      },
      {
        name: "TWO FRAGRENCE",
        subtitle: "Full stack working e-com site with JWT Authorization.",
        link: "https://two-fragrence.netlify.app/",
        imgsrc: twoFrag,
      },
      {
        name: "UNDER DEV",
        subtitle: "Project under development, link will be here soon.",
        link: "",
        imgsrc: dummyBG,
      },
      {
        name: "UNDER DEV",
        subtitle: "Project under development, link will be here soon.",
        link: "",
        imgsrc: dummyBG,
      },
    ],
    activeSelection: null,
  },
  reducers: {
    toggleSelection(state, action) {
      state.activeSelection =
        state.activeSelection === action.payload ? null : action.payload;
    },
  },
});
export const sliceActions = sliceOne.actions;
export default sliceOne;
