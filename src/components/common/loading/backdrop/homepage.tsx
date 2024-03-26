import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

interface IBackdrop{
    open:boolean;
    onClose:()=>void;
}
export default function SimpleBackdrop(props:IBackdrop) {
  const {open, onClose} = props;

  return (
    <div>
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={onClose}
      >
        Loading..
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}