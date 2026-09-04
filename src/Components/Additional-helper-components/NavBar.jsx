import classes from "./NavBar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const navItems = ["Home", "About", "Work", "Services", "Contact"];
const NavBar = () => {
  return (
    <>
      <Toolbar variant="dense" className={classes.parentBar}>
        <Box className={classes.childBar}>
          {navItems.map((el) => {
            return (
              <Box className={classes.navItemParent_cover}>
                <Box className={classes.navItemChild_cover}>
                  <p>{el}</p>
                </Box>
                <Box className={classes.btn_ball}></Box>
              </Box>
            );
          })}
        </Box>
      </Toolbar>
    </>
  );
};

export default NavBar;
