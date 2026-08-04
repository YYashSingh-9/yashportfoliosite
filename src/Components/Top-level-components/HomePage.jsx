import { Box, Grid } from "@mui/material";
import HomePageGrid from "../Additional-helper-components/HomePageGrid";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <>
      <Grid
        container
        direction={"column"}
        justifyContent="center"
        alignContent="center"
      >
        <Grid item>
          <HomePageGrid />
        </Grid>
        <Grid item>
          <AboutPage />
        </Grid>
      </Grid>
    </>
  );
};
export default HomePage;
