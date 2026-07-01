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
const NavBar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          sx={{ bgcolor: "white", justifyContent: "space-between" }}
          className={classes.parentBar}
        >
          <Box>
            <h2>hellow</h2>
          </Box>
          <Box className={classes.childBar}>
            <Box>Home</Box>
            <Box>About</Box>
            <Box>Work</Box>
            <Box>Services</Box>
            <Box>Contact</Box>
          </Box>
          <Box>
            <h2 style={{ color: "black" }}>logout</h2>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
