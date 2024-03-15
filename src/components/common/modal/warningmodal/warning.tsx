import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Box,
  Grid,
  InputAdornment,
  Link,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import theme from "../../../../styles/theme/theme";
import { useState, useRef, useEffect } from 'react'
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface IWarningModal{
    open:boolean;
    onClose:()=>void
  }
export default function WaringModal(props: IWarningModal) {
  const { open, onClose } = props;
  const router = useRouter();

  const handleRedirect = () =>{
    let tokens = JSON.parse(localStorage.getItem("token") || "{}");
    const objectLength = Object.entries(tokens).length;
    console.log(objectLength);
    if(objectLength > 0){
        router.push("/registeruser")
    }
    else{
        router.push("/login")
    }
}
const handleClose = ()=>{
    onClose()
}
  return (
    <Box>
      <Dialog
        sx={{
          ".MuiDialog-paper": {
            width: "300px",
            height: "231px",
            borderRadius: "14px",
            mt: "5%",
          },
        }}
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <Stack sx={{ mt: "55px", mx: "auto" }}>
          <Box>
            <Typography variant="h4" sx={{  fontWieght: 600, textAlign:"center"}}> You have to Login First</Typography>
          </Box>
          <Stack  direction="row" justifyContent="space-around"  sx={{
            mt:"20px"
          }}>
            <Box>
            <Button 
            onClick={handleRedirect}
            sx={{
              color: theme.palette.primary.light,
            //   ml: "30%",
              background: theme.palette.primary.main,
            ":hover": {
              background: theme.palette.primary.main,
              color: theme.palette.primary.light,
            },
            mx:"20px"
            }}>okay</Button>
            </Box>
            <Box>
            <Button 
            onClick={handleClose}
            sx={{
                color: theme.palette.primary.light,
                //   ml: "30%",
                  background: theme.palette.primary.main,
                ":hover": {
                  background: theme.palette.primary.main,
                  color: theme.palette.primary.light,
            },
            mx:"20px"
            }}>No</Button>
            </Box>
          </Stack>
        </Stack>


      </Dialog>
    </Box>
  );
}
