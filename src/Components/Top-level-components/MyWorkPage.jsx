import classes from "./MyWorkPage.module.css";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import { Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import InfoCard from "../DRYComponents/InfoCard";

//Helper component
const SectionButton = (props) => {
  //CLICK FUNCTION
  const click_fnction = () => {
    let passing_prop = props.title === "Technical work" ? "tech" : "non_tech";
    props.clickFn(passing_prop);
  };

  return (
    <>
      <button className={classes.wrkSectionBtn} onClick={click_fnction}>
        {props.title}{" "}
        <span className={props.clss}>
          {" "}
          <AddIcon />
        </span>
      </button>
    </>
  );
};

const MyWorkPage = () => {
  const [openSectionState, setOpenSectionState] = useState(false);
  const [techSectionState, set_techSectionState] = useState(false);
  const [non_techSectionState, set_non_techSectionState] = useState(false);

  let tech_sectionClasses =
    techSectionState === true
      ? `${classes.left_grid} ${classes.left_grid_wide}`
      : `${classes.left_grid}`;

  let nonTech_sectionClasses =
    openSectionState && non_techSectionState === true
      ? `${classes.right_grid} ${classes.right_grid_wide}`
      : `${classes.right_grid}`;

  const btn_class =
    openSectionState === false
      ? `${classes.plus_icn}`
      : `${classes.plus_icn} ${classes.iconflip}`;

  const clickfn = (props) => {
    setOpenSectionState(!openSectionState);
    if (props === "tech") {
      set_techSectionState(!techSectionState);
    }
    if (props === "non_tech") {
      set_non_techSectionState(!non_techSectionState);
    }
  };

  return (
    <>
      <BasicCoverDiv direction="row">
        {non_techSectionState !== true && (
          <Grid item className={tech_sectionClasses}>
            <Box>
              {/* <SectionButton
                clss={btn_class}
                clickFn={clickfn}
                title="Technical work"
              /> */}
              <InfoCard />
            </Box>
          </Grid>
        )}

        <Box className={classes.midLine}></Box>
        {techSectionState !== true && (
          <Grid item className={nonTech_sectionClasses}>
            <Box>
              <SectionButton
                clss={btn_class}
                clickFn={clickfn}
                title="Non-technical work"
              />
            </Box>
          </Grid>
        )}
      </BasicCoverDiv>
    </>
  );
};

export default MyWorkPage;
