import classes from "./AboutSectionButton.module.css";

const AboutSectionButton = (props) => {
  const { pageInfo } = props;

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
