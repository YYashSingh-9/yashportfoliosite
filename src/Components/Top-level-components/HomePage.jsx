import { Grid } from "@mui/material";
import HomePageGrid from "../Additional-helper-components/HomePageGrid";
import AboutPage from "./AboutPage";
import NavigationSection from "./NavigationSection";
import MyWorkPage from "./MyWorkPage";

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
          <NavigationSection />
        </Grid>
        <Grid item>
          <AboutPage />
        </Grid>
        <Grid item>
          <MyWorkPage />
        </Grid>
      </Grid>
    </>
  );
};
export default HomePage;
