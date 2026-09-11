import classes from "./MyWorkPage.module.css";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import InfoCard from "../DRYComponents/InfoCard";
import { motion } from "framer-motion";
import twoFrag from "../../assets/twoFrag.png";
import ehWater from "../../assets/ehwater.png";
import mycrdit from "../../assets/myCrdit.png";
import dummyBG from "../../assets/dummyBG.png";

//Helper component
const SectionButton = (props) => {
  //CLICK FUNCTION
  const click_fnction = () => {
    let propToPass = props.btnAbout === "tech" ? props.btnAbout : "non_tech";
    props.clickFn(propToPass);
  };

  return (
    <>
      <button className={classes.wrkSectionBtn} onClick={click_fnction}>
        {props.btnTitle}{" "}
        <span className={props.icon_class}>
          {" "}
          <AddIcon />
        </span>
      </button>
    </>
  );
};

const cardObj = [
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
    imgsrc: mycrdit,
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
];

const MyWorkPage = () => {
  //1. Managing state.
  const [activeSelection, setActiveSelection] = useState(null);

  //2. Toggling state.
  const toggleSelection = (selection) => {
    setActiveSelection((prevState) =>
      prevState === selection ? null : selection,
    );
  };

  //3. Manging helper state.
  const isTechOpen = activeSelection === "tech";
  const isNonTechOpen = activeSelection === "non_tech";

  //4. Toggling component classes.
  const iconClassFlip = (isExpanded) => {
    return `${classes.plus_icn} ${isExpanded ? classes.iconflip : ""}`;
  };

  return (
    <>
      <div className={classes.parentContainer}>
        {!isNonTechOpen && (
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${classes.gridItem} ${isTechOpen ? classes.fullWidth : classes.halfWidth}`}
          >
            <SectionButton
              icon_class={iconClassFlip(isTechOpen)}
              clickFn={toggleSelection}
              btnAbout="tech"
              btnTitle="Technological"
            />

            {isTechOpen && (
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={classes.cardsParentContainer}
              >
                {cardObj.map((el, i) => (
                  <InfoCard
                    cardTitle={el.name}
                    cardDescription={el.subtitle}
                    imgSrc={el.imgsrc}
                    key={String(el.name).charAt(1) + i}
                    link={el.link}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {!activeSelection && <Box className={classes.midLine}></Box>}

        {!isTechOpen && (
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${classes.gridItem} ${isNonTechOpen ? classes.fullWidth : classes.halfWidth}`}
          >
            <SectionButton
              icon_class={iconClassFlip(isNonTechOpen)}
              clickFn={toggleSelection}
              btnAbout="non_tech"
              btnTitle="Non-technological"
            />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default MyWorkPage;
