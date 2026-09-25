import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./ModalDialog.module.css";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
const ModalDialog = (props) => {
  const { open, onClose, dialogInfo } = props;
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        className={classes.modalBg}
      >
        <DialogTitle className={classes.parentDialogBox}>
          <Box className={classes.headingParentBox}>
            <IconButton className={classes.headIcon}>
              <ViewInArIcon className={classes.headIcon} />
            </IconButton>
            <Typography
              variant="p"
              fontWeight="bold"
              className={classes.headingText}
            >
              {" "}
              {dialogInfo.cardHeading}
            </Typography>
          </Box>

          <br />
          <Typography
            variant="p"
            fontWeight="bold"
            className={classes.subHeadingText}
          >
            {" "}
            {dialogInfo.cardSubHeading}
          </Typography>
        </DialogTitle>

        <DialogContent>
          <Typography paragraph className={classes.cardParagraph}>
            {dialogInfo.cardMainText}{" "}
          </Typography>
        </DialogContent>
        <DialogActions className={classes.cardActionSection}>
          <Button
            href={dialogInfo.link}
            onClick={onClose}
            color="inherit"
            className={classes.openLinkBtn}
          >
            {" "}
            Open project
          </Button>
          <Button
            onClick={onClose}
            color="inherit"
            className={classes.closeBtn}
          >
            {" "}
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalDialog;
