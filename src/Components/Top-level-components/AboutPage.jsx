import classes from "./AboutPage.module.css";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import vaseImg from "../../assets/whitevase.png";
import { Box } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <BasicCoverDiv direction={"column"}>
        <Box className={classes.parentLayer}>
          <Box className={classes.firstLayer}>
            <Box>
              <p>This is about me</p>
              <button>Read more</button>
            </Box>
            <Box>
              <p>This is also about me</p> <button>Read more</button>
            </Box>
          </Box>
          <Box className={classes.secondLayer}>
            <p>About me</p>
            <Box>
              <img src={vaseImg} />
            </Box>
          </Box>
          <Box className={classes.thirdLayer}>
            <Box>
              <p>This is about me</p>
              <button>Read more</button>
            </Box>
            <Box>
              <p>This is also about me</p> <button>Read more</button>
            </Box>
          </Box>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default AboutPage;
