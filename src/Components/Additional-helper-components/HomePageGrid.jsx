import classes from "./HomePageGrid.module.css";
import { Box, Grid } from "@mui/material";

const HomePageGrid = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid>
          <Box>This is 1</Box>
        </Grid>
        <Grid>
          <Box>This is 2</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePageGrid;
