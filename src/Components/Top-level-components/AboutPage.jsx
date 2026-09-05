import classes from "./AboutPage.module.css";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import boystanding from "../../assets/aboutImg.png";
import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const AboutPage = () => {
  const clickevent = () => {
    console.log("this click works.");
  };
  return (
    <>
      <BasicCoverDiv direction={"column"}>
        <Box className={classes.parentLayer}>
          <Box className={classes.firstLayer}>
            <Box>
              <p>
                Thinking why should you{" "}
                <span className={classes.highlighted_text}> hire me</span>{" "}
                ?{" "}
              </p>
              <button onClick={clickevent}>
                Read this please.. <ArrowOutwardIcon />
              </button>
            </Box>
            <Box>
              <p>
                Why i{" "}
                <span className={classes.highlighted_text}> stand out</span>{" "}
                from the crowd.
              </p>{" "}
              <button onClick={clickevent}>
                Click here please. <ArrowOutwardIcon />
              </button>
            </Box>
          </Box>
          <Box className={classes.secondLayer}>
            <Box>
              <img src={boystanding} />
            </Box>
          </Box>
          <Box className={classes.thirdLayer}>
            <Box>
              <p>
                How i am able to{" "}
                <span className={classes.highlighted_text}>
                  {" "}
                  contribute m
                  <span className={classes.semi_highlight_txt}>ore. </span>
                </span>
              </p>
              <button onClick={clickevent}>
                It would be great, if you read this.
                <ArrowOutwardIcon />
              </button>
            </Box>
            <Box>
              <p>
                My blunt honest{" "}
                <span className={classes.highlighted_text}>opinion. </span>{" "}
              </p>
              <button onClick={clickevent}>
                Very direct but explains my true self, do read.
                <ArrowOutwardIcon />
              </button>
            </Box>
          </Box>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default AboutPage;
