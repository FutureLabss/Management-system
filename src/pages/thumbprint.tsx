import AdminLayOut from "@/layout/admin";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";
import thumbprint from '../images/thumbprint.jpeg'
import Image from "next/image";
import Link from "next/link";
import SuccessfullModal from "@/components/common/modal/successul";

export default function ThumbPrintPage(){
    const theme = useTheme();
    return(
        <>
        <AdminLayOut>
            <Box px="3rem" py="2rem" height="100vh">
            <Stack direction="row" spacing="30px">
                <Link href="/">
                <Box sx={{color: theme.palette.primary.main}}>
                <FaArrowLeft color="inherit" fontSize="20px"/>
                </Box>
                </Link>
                <Typography variant="body2" sx={{color: theme.palette.primary.main,}}>Thumbprint</Typography>
            </Stack>
            <Box textAlign="center" mt={20}>
            <Image src={thumbprint} alt="thumbprintImage" width={300} height={200} />
            <Typography sx={{mt:"3rem", color: theme.palette.primary.main, }}>Place your hand on the thumbprint to verify your identity</Typography>
            </Box>
            
            </Box>
            <SuccessfullModal />
        </AdminLayOut>
        </>
    )
}
