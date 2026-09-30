import classes from "./NavBar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import nav_BG from "../../assets/nav_bg.png";
import { Button } from "@mui/material";

const navItems = [
  { title: "Start here", linksId: "#home" },
  { title: "Navigate", linksId: "#navsection" },
  { title: "Know me", linksId: "#about" },
  { title: "see my work", linksId: "#work" },
  { title: "what i do", linksId: "" },
  { title: "let's talk", linksId: "" },
];
const NavBar = () => {
  return (
    <>
      <Toolbar variant="dense" className={classes.parentBar}>
        <Box className={classes.childBar}>
          {navItems.map((el) => {
            return (
              <Box className={classes.navItemParent_cover}>
                <Box className={classes.navItemChild_cover}>
                  <Button href={el.linksId} className={classes.navBtn}>{el.title}</Button>
                </Box>
                <Box className={classes.btn_ball}></Box>
              </Box>
            );
          })}
        </Box>
        <Box className={classes.navBG_img}>
          <img src={nav_BG} />
        </Box>
      </Toolbar>
    </>
  );
};

export default NavBar;
