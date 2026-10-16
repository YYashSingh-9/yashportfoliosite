import classes from "./AboutSectionButton.module.css";
import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

/* cardTitle: props.cardTitle,
    cardHeading: props.cardHeading,
    cardSubHeading: props.cardSubHeading,
    cardMainText: props.cardMainText,
    link: props.link,
    image_src: props.imgSrc,
    */

const AboutSectionButton = (props) => {
  const { pageInfo, clickFn } = props;

  const pageInfoFinal = {
    cardHeading: pageInfo.content_Heading,
    cardSubHeading: pageInfo.content_subheading,
    cardMainText: pageInfo.content_main_text,
    onelineText: pageInfo.onelineText,
  };

  const clickevent = () => {
    clickFn(pageInfoFinal);
    console.log(pageInfoFinal, pageInfo);
  };
  return (
    <>
      <Box>
        <p>{pageInfo.name}</p>
        <button onClick={clickevent}>
          {pageInfo.buttonText}
          <ArrowOutwardIcon />
        </button>
      </Box>
    </>
  );
};

export default AboutSectionButton;
