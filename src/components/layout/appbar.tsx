import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import avatar from "../../images/avatar.png"
import {  MenuItem, Stack } from '@mui/material';
import {LuLayoutDashboard} from "react-icons/lu"
import {MdProductionQuantityLimits} from "react-icons/md"
import {RiListOrdered2} from "react-icons/ri"
import {MdPerson} from "react-icons/md"
import {GiWallet} from "react-icons/gi"
import {RiLogoutBoxRLine} from "react-icons/ri"
// import Image from 'next/image';
// import logo from "../../../images/logo.png"
import Link from 'next/link';
import theme from '@/styles/theme/theme';
import { Badge } from '@mui/icons-material';
import { IoIosNotifications } from "react-icons/io";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  title:string;
}

const drawerWidth = 240;

export default function AppBarLayout(props: Props) {
  const { window, title } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} padding="10px">
      <Link href="/">
      <Box >
           <Typography variant="h1">WATCHLIST</Typography>
        </Box>
      </Link>
      {/* <Divider /> */}
      <List>
      {[
          { text: "Dashboard", to: "/dashboard", icon: LuLayoutDashboard },
          { text: "User Management", to: "/management", icon: MdPerson },
        ].map((item, index) => (
          <Link href={item.to} key={item.to} style={{ textDecoration: "none" }}>
          <ListItem
            key={index}
            disableGutters
            disablePadding
            sx={{
              // px:"15px",
              px: { xs: "15px", md: "2vw" },
              color: theme.palette.primary.main,
              textDecoration:"none",
              py:"15px"
            }}
          >
              <ListItemButton>
            <Stack
              direction="row"
              alignItems="center"
              gap="10px"
            >
              <Box>
                <item.icon fontSize={"inherit"} />
              </Box>
              <ListItemText
                primary={
                  <Typography variant='h6' sx={{color:theme.palette.primary.main}}>
                    {item.text}
                  </Typography>
                }
              />
            </Stack>
              </ListItemButton>
          </ListItem>
        </Link>
          ))}
           <ListItem
          disableGutters
          disablePadding
          sx={{
            // py: "1.25vw",
            mt: "70vw",
            px: "15%",
            cursor: "pointer",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            //  pr={{xs:"70px",md:"5.14vw"}}
          >
            <Box mr={{ xs: "17px", md: "1.25vw" }}>
              <RiLogoutBoxRLine />
            </Box>
            <ListItemText
              primary={
                <Typography fontSize={{ xs: "0.75em", md: "1.25vw" }}>
                  LogOut
                </Typography>
              }
            />
          </Stack>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" elevation={0} 
      sx={{
        background:"#FFF",
        // width:{md:"78.5%", xs:"100%"}
        width:{xs:"100%", md:`calc(100% - ${drawerWidth}px)`}

      }}>
        <Toolbar> 
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' }, ml:"%",
        color:theme.palette.primary.main,
        flexGrow: 20,
        // mr:15
    }}
          >
          {title}
          </Typography>
          <Box sx={{flexGrow: 1,}}>
          <Stack direction="row" >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
        >
          <IoIosNotifications color="black" size={33}/>
        </IconButton>
      <Stack direction="row" gap="5px">
          <Avatar
          sx={{ width: 56, height: 56 }}
          src={avatar.src} />
          <Box mt="7%">
            <Typography sx={{color:"black"}}>Daniel.k.o</Typography>
            <Typography  sx={{color:"black"}}>Admin</Typography>
          </Box>

      </Stack>
          </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
             width: drawerWidth,
             background: "#FFF",
             padding:"10px",
             color:"white" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}