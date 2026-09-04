import classes from "./HomePageGrid.module.css";
import { Box, Grid } from "@mui/material";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import zeusPng from "../../assets/sitting_bg.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TwoFloorDiv from "../DRYComponents/TwoFloorDiv";

const HomePageGrid = () => {
  return (
    <>
      {/* <Grid container spacing={2} className={classes.h_page_outerGrid}> */}
      <BasicCoverDiv direction="row">
        <Grid className={classes.leftGrid}>
          <Box>
            <p>
              {" "}
              <span className={classes.txt_highlighter}> portfolio</span> of
              Yash
            </p>
          </Box>
          <Box>
            {/* <p style={{ background: "transparent", backdropFilter: blur(2) }}>
              {" "}
              <span className={classes.txt_1}>Your </span>
              <span className={classes.txt_2}> next</span>
              <br />
              best <span className={classes.txt_1}>investment. </span>
            </p> */}
          </Box>
          <Box>
            <img src={zeusPng} />
          </Box>

          <Box>
            <button>Tap</button>
          </Box>
        </Grid>
      </BasicCoverDiv>
    </>
  );
};

export default HomePageGrid;
