import classes from "./InfoCard.module.css";
import { Grid, Box } from "@mui/material";

const InfoCard = () => {
  return (
    <>
      <Grid container className={classes.parentCard}>
        <Grid item className={classes.innerGrid}>
          <Box>
            <img />
          </Box>
          <Box>
            <h2>Project card title</h2>
            <p>A digital product about xyz cause.</p>
          </Box>
          <Box>
            <button>View Project</button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default InfoCard;
