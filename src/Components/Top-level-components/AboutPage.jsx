import classes from "./AboutPage.module.css";
import ModalDialog from "../DRYComponents/ModalDialog";
import BasicCoverDiv from "../DRYComponents/BasicCoverDiv";
import AboutSectionButton from "../DRYComponents/AboutSectionButton";
import { useDispatch, useSelector } from "react-redux";
import boystanding from "../../assets/aboutImg.png";
import { Box } from "@mui/material";

const AboutPage = () => {
  const aboutPage_Data = useSelector((state) => state.sliceOne.aboutPageInfo);
  const viewdAboutSection = useSelector(
    (state) => state.sliceOne.viewdAboutSection,
  );
  const modalState = useSelector(
    (state) => state.sliceOne.aboutSection_Modal_state,
  );
  const dispatch = useDispatch();
  const clickevent = (props) => {
    console.log(props);
  };
  return (
    <>
      <BasicCoverDiv direction={"column"}>
        <Box className={classes.parentLayer}>
          <Box className={classes.firstLayer}>
            <AboutSectionButton pageInfo={aboutPage_Data[0]} />
            <AboutSectionButton pageInfo={aboutPage_Data[1]} />
          </Box>
          <Box className={classes.secondLayer}>
            <Box></Box>
            <Box>
              <img src={boystanding} />
            </Box>
          </Box>
          <Box className={classes.thirdLayer}>
            <AboutSectionButton pageInfo={aboutPage_Data[2]} />
            <AboutSectionButton pageInfo={aboutPage_Data[3]} />
          </Box>
          <ModalDialog
            open={modalState}
            onClose={clickevent}
            dialogInfo={viewdAboutSection}
          />
        </Box>
      </BasicCoverDiv>
    </>
  );
};

export default AboutPage;
