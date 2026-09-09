import classes from "./MyWorkPage.module.css";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import { Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import InfoCard from "../DRYComponents/InfoCard";
import { motion } from "framer-motion";

//Helper component
const SectionButton = (props) => {
  //CLICK FUNCTION
  const click_fnction = () => {
    let propToPass = props.title === "tech" ? props.title : "non_tech";
    props.clickFn(propToPass);
  };

  return (
    <>
      <button className={classes.wrkSectionBtn} onClick={click_fnction}>
        {props.title}{" "}
        <span className={props.icon_class}>
          {" "}
          <AddIcon />
        </span>
      </button>
    </>
  );
};

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
  const tech_sectionClasses = `${classes.left_grid} ${isTechOpen ? classes.left_grid_wide : ""}`;
  const nonTech_sectionClasses = `${classes.right_grid} ${isNonTechOpen ? classes.right_grid_wide : ""}`;
  const iconClassFlip = (isExpanded) => {
    return `${classes.plus_icn} ${isExpanded ? classes.iconflip : ""}`;
  };

  return (
    <>
      <BasicCoverDiv className={classes.parentContainer}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`${classes.gridItem} ${classes}`}
        ></motion.div>
        {/* {!isNonTechOpen && ( */}
        {/* <Grid item className={tech_sectionClasses}>
            <Box> */}
        {/* <SectionButton
                icon_class={iconClassFlip(isTechOpen)}
                clickFn={toggleSelection}
                title="tech"
              /> */}
        {/* <InfoCard /> */}
        {/* </Box>
          </Grid> */}
        {/* )} */}

        {/* {!activeSelection && <Box className={classes.midLine}></Box>} */}

        {/* {!isTechOpen && ( */}
        {/* <Grid item className={nonTech_sectionClasses}> */}
        {/* <Box> */}
        {/* <SectionButton
                icon_class={iconClassFlip(isTechOpen)}
                clickFn={toggleSelection}
                title="non_tech"
              /> */}
        {/* </Box>
          </Grid> */}
        {/* )} */}
      </BasicCoverDiv>
    </>
  );
};

export default MyWorkPage;
