import AdminLayOut from "@/layout/admin";
import { UserModel } from "@/lib/interface/Iregister";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "../../images/avatar.png";
import theme from "@/styles/theme/theme";





export default function SingleUserComponent(props: UserModel) {
  return (
    <Grid container spacing={2}>
      <Grid item md={4} xs={12} sm={6}>
        <Stack>
          <Box>
            <Image 
            src={props.avatarUrl ?? avatar.src} 
            alt="users profile" 
            width={220}
            height={220}
            />
          </Box>
          <Typography variant="h6" sx={{color:theme.palette.secondary.light}}>FullName: {props.fullName}</Typography>
          <Typography variant="h6" sx={{color:theme.palette.secondary.light}}>Email: {props.email}</Typography>
          <Typography variant="h6" sx={{color:theme.palette.secondary.light}}>Phone Number{props.phoneNumber}</Typography>
          <Typography variant="h6" sx={{color:theme.palette.secondary.light}}> Skill: {props.department}</Typography>
          <Typography variant="h6" sx={{color:theme.palette.secondary.light}}> {props.role}</Typography>
        </Stack>
      </Grid>
      <Grid item md={8} xs={12} sm={6}>

        
      </Grid>
    </Grid>
  );
}
