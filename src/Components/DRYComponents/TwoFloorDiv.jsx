import { Box } from "@mui/material";
import classes from "./TwoFloorDiv.module.css";

const TwoFloorDiv = () => {
  return (
    <>
      <Box className={classes.parentDiv}>
        <Box className={classes.firstFloorDiv}>5+ </Box>
        <Box className={classes.secondFloorDiv}>Years of experience</Box>
      </Box>
    </>
  );
};

export default TwoFloorDiv;
