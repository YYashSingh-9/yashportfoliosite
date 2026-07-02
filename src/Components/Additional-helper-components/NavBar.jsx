import classes from "./NavBar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function DenseAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               color: 'inherit',
//             }}
//           >
//             Photos
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
const navItems = ["Home", "About", "Work", "Services", "Contact"];
const NavBar = () => {
  return (
    <>
      <Toolbar
        variant="dense"
        sx={{ justifyContent: "space-between", alignContent: "center" }}
        className={classes.parentBar}
      >
        <Box>
          <h2>Y.</h2>
        </Box>
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
        <Box className={classes.logoutBtn}>
          <button>
            <p>let's talk</p>
          </button>
        </Box>
      </Toolbar>
    </>
  );
};

export default NavBar;
