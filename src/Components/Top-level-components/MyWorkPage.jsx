import classes from "./MyWorkPage.module.css";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import { Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const SectionButton = (props) => {
  return (
    <>
      <button className={classes.wrkSectionBtn} onClick={props.clickFn}>
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
  const [openSectionState, setOpenSectionState] = useState(true);

  const btn_class =
    openSectionState === true
      ? `${classes.plus_icn}`
      : `${classes.plus_icn} ${classes.iconflip}`;

  const clickfn = () => {
    setOpenSectionState(!openSectionState);
  };

  return (
    <>
      <BasicCoverDiv direction="row">
        <Grid item className={classes.left_grid}>
          <Box>
            <SectionButton
              clss={btn_class}
              clickFn={clickfn}
              title="Technical work"
            />
          </Box>
        </Grid>
        <Box className={classes.midLine}></Box>
        {}
        <Grid item className={classes.right_grid}>
          <Box>
            <SectionButton
              clss={btn_class}
              clickFn={clickfn}
              title="Non-technical work"
            />
          </Box>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default MyWorkPage;
