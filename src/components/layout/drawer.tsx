import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
// import logo from "../../../images/logo.png"
import {LuLayoutDashboard} from "react-icons/lu"
import {MdProductionQuantityLimits} from "react-icons/md"
import {RiListOrdered2} from "react-icons/ri"
import {MdPerson} from "react-icons/md"
import {GiWallet} from "react-icons/gi"
import {RiLogoutBoxRLine} from "react-icons/ri"
import { Stack } from '@mui/material';
import { useRouter } from "next/router";
import Link from "next/link";
import theme from '@/styles/theme/theme';

const drawerWidth = 240;

export default function DrawerLayout(){
    const router = useRouter();
  const currentPage = router.pathname;
    return(
        <>
        <Box>
           <Drawer
        sx={{
            display:{md:"block", xs:"none"},
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border:"soid red",
            background: theme.palette.primary.light,
            // padding:"5rem",
            color:theme.palette.primary.main,
            py:"3rem",
           
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Link href="/">
         <Typography variant="h1" sx={{ px:{xs:"2rem", md:"2rem"}}}>WATCHLIST</Typography>
        </Link>
        <Stack direction="column">
        <List>
        {[
          { text: "Dashboard", to: "/dashboard", icon: LuLayoutDashboard },
          { text: "User Management", to: "/Management", icon: MdPerson },
        ].map((item, index) => (
            <Link href={item.to} key={item.to} style={{ textDecoration: "none"}} 
           >
            <ListItem
              key={index}
              disableGutters
              disablePadding
              sx={{
                px:"2rem",
                my:"2rem" ,
                color:theme.palette.primary.main,
                textDecoration:"none",
                "&:hover":{background: theme.palette.primary.main,
              borderRadius:"10px",
              color:theme.palette.secondary.main}
              }}
            >
                <ListItemButton>
              <Stack
                direction="row"
                alignItems="center"
                gap="10px"
              >
                <Box sx={{fontSize:"18px"}}>
                  <item.icon fontSize={"inherit"} />
                </Box>
                <ListItemText
                  primary={
                    <Typography  variant='subtitle2'>
                      {item.text}
                    </Typography>
                  }
                />
              </Stack>
                </ListItemButton>
            </ListItem>
          </Link>
          ))}
        </List>

        <ListItem
          disableGutters
          disablePadding
          sx={{
            px:"3rem",
            cursor: "pointer",
            "&:hover":{background: theme.palette.primary.main,
                borderRadius:"10px",
                color:theme.palette.secondary.main,
            px:"4rem"}
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
          >
            <Box mr={{ xs: "17px", md: "1.25vw" }} sx={{fontSize:"18px"}}>
              <RiLogoutBoxRLine fontSize={"inherit"} />
            </Box>
            <ListItemText
              primary={
                <Typography fontSize={{ xs: "0.75em", md: "1.25rem" }}>
                  LogOut
                </Typography>
              }
            />
          </Stack>
        </ListItem>
        </Stack>
      </Drawer>
        </Box>
        </>
    )
}