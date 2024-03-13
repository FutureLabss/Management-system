import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { IModal } from "@/lib/interface/imodal";
import RoundButton from "../../roundbutton/roundbutton";
import { Box } from "@mui/material";
import theme from "@/styles/theme/theme";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface IDeactivatedModal {
  open: boolean;
  status: boolean;
  onClose: () => void;
  onDeactivate: () => void;
}
export default function SuggestionModal(props: IDeactivatedModal) {
  const { open, onClose, status, onDeactivate } = props;

  const handleDeactivate = () => {
    onDeactivate();
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        sx={{
          ".MuiDialog-paper": {
            width: "433px",
            height: "271px",
            borderRadius: "44px",
            mt: "5%",
            mx: "auto",
            overflow: "hidden",
          },
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ mx: "auto", py: "4rem", px: "3rem" }}>
          <DialogContent>
            <DialogContentText
              sx={{
                fontSize: { md: "1rem", xs: "1rem" },
                color: "#7C7B7B",
                textAlign: "center",
              }}
            >
              Are you sure you want to {status ? "deactivate" : "reactivate"}{" "}
              the user account.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <RoundButton
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                color: "#fff",
                fontSize: "1.5rem",
              }}
              onClick={onClose}
            >
              Cancel
            </RoundButton>
            <RoundButton
              onClick={handleDeactivate}
              variant="outlined"
              color={status ? "secondary" : "primary"}
              sx={{
                width: "100%",
                color: "#fff",
                fontSize: "1.5rem",
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.light,
                },
              }}
            >
              {status ? "Deactivate" : "Reactivate"}
            </RoundButton>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
