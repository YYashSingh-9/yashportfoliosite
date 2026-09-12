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
        description: "Local debt management and credit score app.",
        link: "https://mycrdit.netlify.app",
        imgsrc: mycrdit,
      },
      {
        name: "EH WATER",
        description: "Online space to share water problems and solutions.",
        link: "https://eh-water.netlify.app/",
        imgsrc: ehWater,
      },
      {
        name: "TWO FRAGRENCE",
        description: "Full stack working e-com site with JWT Authorization.",
        link: "https://two-fragrence.netlify.app/",
        imgsrc: twoFrag,
      },
      {
        name: "UNDER DEV",
        description: "Project under development, link will be here soon.",
        link: "",
        imgsrc: dummyBG,
      },
      {
        name: "UNDER DEV",
        description: "Project under development, link will be here soon.",
        link: "",
        imgsrc: dummyBG,
      },
    ],
    activeSelection: null,
    modalDialog_Open: false,
    viewedProject: {},
  },
  reducers: {
    toggleSelection(state, action) {
      state.activeSelection =
        state.activeSelection === action.payload ? null : action.payload;
    },
    toggle_ModalDialog(state, action) {
      state.modalDialog_Open = !state.modalDialog_Open;
      state.viewedProject = action.payload;
    },
  },
});

export const sliceActions = sliceOne.actions;
export default sliceOne;
