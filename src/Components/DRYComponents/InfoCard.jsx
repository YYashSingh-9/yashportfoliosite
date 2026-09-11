import classes from "./InfoCard.module.css";
import { Grid, Box, Button } from "@mui/material";

const InfoCard = (props) => {
  return (
    <>
      <Grid container className={classes.parentCard}>
        <Grid item xs={12} className={classes.innerGrid}>
          <Box className={classes.imageContainer}>
            <img src={props.imgSrc} />
          </Box>
          <Box className={classes.titleBox}>
            <h2>{props.cardTitle}</h2>
            <p>{props.cardDescription}</p>
          </Box>
          <Box className={classes.buttonBox}>
            <Button className={classes.cardButton}>View Project</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default InfoCard;
