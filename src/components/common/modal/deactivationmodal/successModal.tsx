import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { IModal } from "@/lib/interface/imodal";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import theme from "@/styles/theme/theme";
import RoundButton from "../../roundbutton/roundbutton";

interface IsuccessModal {
  open: boolean;
  onClose: () => void;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuccessModal(props: IsuccessModal) {
  const { open, onClose } = props;
  return (
    <Dialog
      sx={{
        ".MuiDialog-paper": {
          width: "350px",
          height: "231px",
          borderRadius: "14px",
          mt: "5%",
          overflow: "hidden",
          mx: "auto",
        },
      }}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      open={open}
    >
      <Box sx={{ mx: "auto", py: "1.5rem", px: "3rem" }}>
        <Typography
          sx={{
            fontSize: { md: "1rem", xs: "1rem" },
            color: "#7C7B7B",
            textAlign: "center",
          }}
        >
          Deactivation successful!
        </Typography>
        <DialogContent>
          <Typography
            variant="body1"
            sx={{ color: "#7C7B7B", textAlign: "center" }}
          >
            The User account has been successfully deactivated
          </Typography>
        </DialogContent>
        <DialogActions>
          <RoundButton
            onClick={onClose}
            variant="outlined"
            color="secondary"
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
            Ok
          </RoundButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
