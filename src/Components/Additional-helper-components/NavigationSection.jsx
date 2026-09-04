import { Grid } from "@mui/material";
import classes from "./NavigationSection.module.css";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import NavBar from "./NavBar";

const NavigationSection = () => {
  return;
  <>
    <BasicCoverDiv direction="row">
      <Grid item className={classes.leftPart}>
        <Box>
          <p style={{ background: "transparent", backdropFilter: blur(2) }}>
            {" "}
            <span className={classes.txt_1}>Your </span>
            <span className={classes.txt_2}> next</span>
            <br />
            best <span className={classes.txt_1}>investment. </span>
          </p>
        </Box>
      </Grid>
      <Grid item className={classes.rightPart}>
        <NavBar />
      </Grid>
    </BasicCoverDiv>
  </>;
};

export default NavigationSection;
