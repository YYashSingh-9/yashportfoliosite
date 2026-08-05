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
              <p>
                Thinking why should you{" "}
                <span className={classes.highlighted_text}> hire me</span>{" "}
                ?{" "}
              </p>
              <button>Read this please..</button>
            </Box>
            <Box>
              <p>
                Why i{" "}
                <span className={classes.highlighted_text}> stand out</span>{" "}
                from the crowd.
              </p>{" "}
              <button>Click here please.</button>
            </Box>
          </Box>
          <Box className={classes.secondLayer}>
            <p>About me.</p>
            <Box>
              <img src={vaseImg} />
            </Box>
          </Box>
          <Box className={classes.thirdLayer}>
            <Box>
              <p>
                How i am able to{" "}
                <span className={classes.highlighted_text}>
                  {" "}
                  contribute more.
                </span>
              </p>
              <button>It would be great, if you read this.</button>
            </Box>
            <Box>
              <p>My blunt honest opinion.</p>
              <button>
                Very direct but explains my true self, please read.
              </button>
            </Box>
          </Box>
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default AboutPage;
