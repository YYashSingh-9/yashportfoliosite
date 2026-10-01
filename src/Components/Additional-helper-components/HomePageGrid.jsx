import classes from "./HomePageGrid.module.css";
import { Box, Grid, Button } from "@mui/material";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import zeusPng from "../../assets/sitting_bg.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TwoFloorDiv from "../DRYComponents/TwoFloorDiv";

const HomePageGrid = () => {
  return (
    <>
      <BasicCoverDiv direction="row">
        <Grid className={classes.leftGrid}>
          <Box>
            <p>
              {" "}
              <span className={classes.txt_highlighter}> portfolio</span> of
              Yash
            </p>
          </Box>
          <Box></Box>
          <Box>
            <img src={zeusPng} />
          </Box>

          <Box>
            <Button href="#navsection" className={classes.btn_base}>
              Tap
            </Button>
            <Box className={classes.btn_ball}></Box>
          </Box>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default HomePageGrid;
