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
interface IDeactivatedModal{
  open: boolean;
  onClose: () => void;
  userId: string | null; 
  onDeactivate: (userId: string) => void;
}
export default function SuggestionModal(props:IDeactivatedModal) {
  const { open, onClose, userId, onDeactivate } = props;

  const handleDeactivate = () => {
    if (userId) {
      onDeactivate(userId);
    }
    onClose();
  };
 
  return (
    <React.Fragment>
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
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ mx:"auto", py:"9rem", px:"3rem"}}>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{fontSize:"24px", color:"#7C7B7B", textAlign:"center"}}>
          Are you sure you want to deactivate the user account. This action cannot be undone
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
          onClick={onClose}
          >Cancel</RoundButton>
          <RoundButton
          onClick={handleDeactivate}
          variant="contained"
        color="secondary"
          sx={{
            width: "100%",
            color: "#fff",
            fontSize: "1.5rem"
          }}
          >Deactivate</RoundButton>
        </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}