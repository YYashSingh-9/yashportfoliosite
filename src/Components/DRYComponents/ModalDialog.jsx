import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./ModalDialog.module.css";

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
          <Typography variant="p" fontWeight="bold">
            {" "}
            {dialogInfo.cardTitle}
          </Typography>
          <Typography variant="p" fontWeight="bold">
            {" "}
            {dialogInfo.cardHeading}
          </Typography>
          <Typography variant="p" fontWeight="bold">
            {" "}
            {dialogInfo.card_subheading}
          </Typography>
          {/* <Typography paragraph>{dialogInfo.cardDescription} </Typography> */}
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography paragraph>{dialogInfo.cardMaintText} </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="inherit">
            {" "}
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalDialog;
