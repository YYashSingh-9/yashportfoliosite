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

const ModalDialog = (props) => {
  const { open, onClose, dialogInfo } = props;
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle className={ClassNames}>
          <Typography variant="h6" fontWeight="bold">
            {" "}
            {dialogInfo.cardTitle}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography paragraph>{dialogInfo.cardDescription} </Typography>
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
