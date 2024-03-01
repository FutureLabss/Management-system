import AdminLayOut from "@/layout/admin";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";
import thumbprint from '../images/thumbprint.jpeg'
import Image from "next/image";
import Link from "next/link";
import SuccessfullModal from "@/components/common/modal/thumbmodal/successul";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";

export default function ThumbPrintPage(){
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
        <>
        <AdminLayOut title="Dashboard">
            <Box px="3rem" py="2rem" height="100vh">
            <Stack direction="row" spacing="30px">
                <Link href="/registeruser">
                <Box sx={{color: theme.palette.primary.main}}>
                <FaArrowLeft color="inherit" fontSize="20px"/>
                </Box>
                </Link>
                <Typography variant="body2" sx={{color: theme.palette.primary.main,}}>Thumbprint</Typography>
            </Stack>
            <Box textAlign="center" mt={10}>
            <Image src={thumbprint} alt="thumbprintImage" width={300} height={200} />
            <Typography sx={{mt:"3rem", color: theme.palette.primary.main, }}>Place your hand on the thumbprint to verify your identity 
            </Typography>
            <Button onClick={handleClickOpen}>open modal</Button>
            </Box>
            
            </Box>
            <SuccessfullModal open={open} onClose={handleClose} 
            icon={<FaCheck size="50px" color="#FFFFFF" />} title={"Verification Successful"} 
            description={"Account successfully created"}
             buttonText={"Go back to dashboard"} />
        </AdminLayOut>
        </>
    )
}
