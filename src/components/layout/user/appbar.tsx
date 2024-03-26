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
import avatar from "../../../images/avatar.png"
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
// import DrawerLayout from './drawer';
import { IconType } from 'react-icons';
import {useAuthContext} from "../../../context/auth"
import { CiCalendarDate } from "react-icons/ci";

interface Props {
  window?: () => Window;
  title:string;
}

interface NavLinks {
  title: string;
  path: string;
  icon: IconType;
}
const links: NavLinks[] = [
  { title: "Dashboard", icon: LuLayoutDashboard, path: "/dashboard" },
  { title: "Log Out", icon: RiLogoutBoxRLine, path: "/logout" },
];


export default function UserAppBarLayout(props: Props) {
  const {auth} = useAuthContext()
  console.log({auth})
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
      
      <Stack mt="2rem">
            {links.map((item) => (
              <Link key={item.path} href={item.path}>
                <Accordion
                  sx={{
                    boxShadow: "none",
                    px: "2rem",
                    color: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "10px",
                      color: theme.palette.primary.light,
                      px: "2rem",
                    },
                  }}
                  expanded={expanded === item.path}
                  onChange={handleChange(item.path)}
                >
                  <AccordionSummary
                    sx={{ padding: "0px" }}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Box display="flex" alignItems="center">
                      <Box sx={{ fontSize: "20px", }}>
                        <item.icon fontSize={"inherit"} />
                      </Box>
                      <Typography variant="subtitle1" sx={{ ml: 1 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                </Accordion>
              </Link>
            ))}
           
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
          <CiCalendarDate size={25} />
          <Typography variant="subtitle1">
          7th February 2024
          </Typography>
        </IconButton>
      <Stack direction="row" gap="5px">
          <Avatar
          sx={{ width: 56, height: 56 }}
          src={avatar.src} />
          <Box mt="8%">
            <Typography sx={{color:"black"}}>FutureLabs</Typography>
            <Typography  sx={{color:"black"}}>Admin</Typography>
          </Box>
      </Stack>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
        >
          <IoIosNotifications  size={25}/>
        </IconButton>
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
