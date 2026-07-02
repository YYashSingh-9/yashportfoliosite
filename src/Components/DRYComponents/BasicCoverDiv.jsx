import { Grid } from "@mui/material";
import classes from "./BasicCoverDiv.module.css";

const BasicCoverDiv = (props) => {
  return (
    <>
      <Grid
        container
        direction={props.direction}
        justifyContent="center"
        alignContent="center"
        className={classes.outerGrid}
      >
        {props.children}
      </Grid>
    </>
  );
};

export default BasicCoverDiv;
