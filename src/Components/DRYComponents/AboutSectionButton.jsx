import classes from "./AboutSectionButton.module.css";
import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const AboutSectionButton = (props) => {
  const { pageInfo, clickFn } = props;

  const clickevent = () => {
    clickFn(pageInfo);
  };
  return (
    <>
      <Box>
        <p>{pageInfo.cardTitle}</p>
        <button onClick={clickevent}>
          {pageInfo.buttonText}
          <ArrowOutwardIcon />
        </button>
      </Box>
    </>
  );
};

export default AboutSectionButton;
