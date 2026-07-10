import classes from "./HomePageGrid.module.css";
import { Box, Grid } from "@mui/material";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import zeusPng from "../../assets/zeus.png";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import TwoFloorDiv from "../DRYComponents/TwoFloorDiv";
const HomePageGrid = () => {
  return (
    <>
      {/* <Grid container spacing={2} className={classes.h_page_outerGrid}> */}
      <BasicCoverDiv direction="row">
        <Grid className={classes.leftGrid}>
          <Box>
            <p> Welome to my portfolio</p>
          </Box>
          <Box>
            <p>
              {" "}
              Your next
              <br /> best investment.
            </p>
            {/* <hr /> */}
          </Box>
          <Box>
            <img src={zeusPng} />
          </Box>
          {/* <Box>
            <p>
              {" "}
              Strategic solutions that drive growth,build value and create
              lasting impact.
            </p>
          </Box> */}
          {/* <Box>
            <button> View my work</button>
          </Box> */}
          {/* <Box className={classes.expDividerText}>
            <TwoFloorDiv />
            <TwoFloorDiv />
            <TwoFloorDiv />
          </Box> */}
          <Box></Box>
        </Grid>
        {/* <Grid className={classes.rightGrid}>
          <Box>This is 2</Box>
        </Grid> */}
      </BasicCoverDiv>
      {/* </Grid> */}
    </>
  );
};

export default HomePageGrid;
