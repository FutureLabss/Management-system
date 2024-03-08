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
import Link from 'next/link';
import theme from '@/styles/theme/theme';
import { IoIosNotifications } from "react-icons/io";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaUpDownLeftRight } from "react-icons/fa6";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DRAWER_WIDTH } from '@/lib/constants/layout';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  title:string;
}


export default function AppBarLayout(props: Props) {
  const { window, title } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


  const drawer = (
    <Box onClick={handleDrawerToggle} padding="10px">
      <Link href="/">
      <Box >
           <Typography variant="h1" sx={{color:theme.palette.primary.main}}>WATCHLIST</Typography>
        </Box>
      </Link>
    <Stack mt="4rem" gap="3rem" >
  <Link href="/dashboard">
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: "10px",
          color: theme.palette.primary.light,
          px: "4rem",
          py: "1rem",
        },
      }}
    >
      <Box mr={{ xs: "17px", md: "1.25vw" }} sx={{ fontSize: "20px", mt: "0.5rem" }}>
        <LuLayoutDashboard fontSize={"inherit"} color="#48A2E9" />
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
          Dashboard
        </Typography>
      </Box>
    </Stack>
  </Link>

  {/* Accordion */}
  <Accordion  
  style={{ boxShadow: "none", padding:"0px"}}
   expanded={expanded === "panel1"} 
   onChange={handleChange("panel1")}>
    <AccordionSummary
     sx={{ padding:"0px"}}
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Box display="flex" alignItems="center">
        <Box sx={{ fontSize: "20px", mt: "0.5rem" }}>
          <FaUpDownLeftRight fontSize={"inherit"} color="#48A2E9" />
        </Box>
        <Typography variant="h5" sx={{ ml: 1, color: theme.palette.primary.main }}>
          User Management
        </Typography>
      </Box>
    </AccordionSummary>
    <AccordionDetails>
      <Link href="">
      <Box mt="-2rem" display="flex" flexDirection="row" justifyContent="center">
      <Typography>
      User History
      </Typography>
      </Box>
      </Link>
      <Link  href="">
      <Box display="flex" flexDirection="row" justifyContent="center" mt="1rem">
      <Typography>
      Present / Absent Users
      </Typography>
      </Box>
      </Link>
      <Link  href="">
      <Box display="flex" flexDirection="row" justifyContent="center" mt="1rem">
      <Typography>
      Deactivated Users
      </Typography>
      </Box>
      </Link>
    </AccordionDetails>
  </Accordion>

  {/* Link to LogOut */}
  <Link href="/logout">
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: "10px",
          color: theme.palette.primary.light,
          px: "4rem",
          py: "1rem",
        },
      }}
    >
      <Box mr={{ xs: "17px", md: "1.25vw" }} sx={{ fontSize: "20px", mt: "0.5rem" }}>
        <RiLogoutBoxRLine fontSize={"inherit"} color="#48A2E9" />
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
          LogOut
        </Typography>
      </Box>
    </Stack>
  </Link>
</Stack>
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
        width:{xs:"100%", md:`calc(100% - ${DRAWER_WIDTH})`}

      }}>
        <Toolbar> 
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md:"none" } }}
          >
            <MenuIcon fontSize="large"  />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' }, ml:"2%",
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
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
             width: DRAWER_WIDTH,
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