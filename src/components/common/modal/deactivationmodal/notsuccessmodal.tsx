import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { IModal } from "@/lib/interface/imodal";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


interface IsuccessModal{
  open:boolean;
  onClose:()=>void
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NotSuccessModal(props:IsuccessModal) {
  const { open, onClose } = props
  return (
    <Dialog
    sx={{
      ".MuiDialog-paper": {
        width: "473px",
        height: "371px",
        borderRadius: "44px",
        mt: "5%",
        mx:"auto",
        overflow:"hidden",
      },
    }}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
     open={open}
     >
      <DialogTitle>Success!</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          User deactivated successfully.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
