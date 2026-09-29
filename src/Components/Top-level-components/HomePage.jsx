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
        <Grid item id="home">
          <HomePageGrid />
        </Grid>
        <Grid item id="navsection">
          <NavigationSection />
        </Grid>
        <Grid item id="about">
          <AboutPage />
        </Grid>
        <Grid item id="work">
          <MyWorkPage />
        </Grid>
      </Grid>
    </>
  );
};
export default HomePage;
