import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { IModal } from '@/lib/interface/imodal';
import RoundButton from '../../roundbutton/roundbutton';
import { Box } from '@mui/material';
import theme from '@/styles/theme/theme';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuccessfullModal(props: IModal) {
       const {open, onClose}=props
 
  return (
    <React.Fragment>
      <Dialog
      sx={{
        ".MuiDialog-paper": {
          width: "563px",
          height: "420px",
          borderRadius: "20px",
          mt: "5%",
          mx:"auto",
          overflow:"hidden",
        },
      }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ mx:"auto", py:"5rem"}}>
         <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            alignItems:"center",
            mx:"auto",
            display:"flex",
            justifyContent:"center",
            width:"40%",
            aspectRatio:"1/1",
            backgroundColor:theme.palette.primary.main,
            "&:hover":{
              backgroundColor:theme.palette.primary.main,
            },
            fontSize:"20px"
          }}
        >
          {props.icon}
        </IconButton>
        <DialogTitle sx={{fontSize:"24px", color:"#7C7B7B", textAlign:"center"}}>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{fontSize:"24px", color:"#7C7B7B"}}>
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <RoundButton
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            color: "#fff",
            fontSize: "1.5rem"
          }}
          >{props.buttonText}</RoundButton>
        </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}