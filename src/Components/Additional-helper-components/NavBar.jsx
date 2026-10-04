import classes from "./NavBar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import nav_BG from "../../assets/nav_bg.png";
import { Button } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import WorkIcon from "@mui/icons-material/Work";
import FrontHandIcon from "@mui/icons-material/FrontHand";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const navItems = [
  { title: "Start here", linksId: "#home", iconName: "start" },
  { title: "Navigate", linksId: "#navsection", iconName: "nav" },
  { title: "Know me", linksId: "#about", iconName: "about" },
  { title: " my work", linksId: "#work", iconName: "work" },
  { title: "what i do", linksId: "", iconName: "services" },
  { title: "let's talk", linksId: "", iconName: "contact" },
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
                  <Button href={el.linksId} className={classes.navBtn}>
                    <span className={classes.btnText}>
                      <p>{el.title} </p>
                      {el.iconName === "start" && <PlayCircleFilledWhiteIcon />}
                      {el.iconName === "nav" && <MenuOpenIcon />}
                      {el.iconName === "about" && <FrontHandIcon />}
                      {el.iconName === "work" && <WorkIcon />}
                      {el.iconName === "services" && <DesignServicesIcon />}
                      {el.iconName === "contact" && (
                        <ConnectWithoutContactIcon />
                      )}
                    </span>
                  </Button>
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
