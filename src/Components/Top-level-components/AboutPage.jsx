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
            <Box>This is about me</Box>
            <Box>This is also about me</Box>
          </Box>
          <Box className={classes.secondLayer}>
            <img src={vaseImg} />
          </Box>
          <Box className={classes.thirdLayer}></Box>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default AboutPage;
