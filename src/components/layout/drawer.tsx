import * as React from "react";
import { Box, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
// import logo from "../../../images/logo.png"
import { LuLayoutDashboard } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiListOrdered2 } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import theme from "@/styles/theme/theme";
import { IoIosNotifications } from "react-icons/io";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaUpDownLeftRight } from "react-icons/fa6";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DRAWER_WIDTH } from "@/lib/constants/layout";



export default function DrawerLayout() {
  const router = useRouter();
  const currentPage = router.pathname;
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Box>
        <Drawer
          sx={{
            display: { md: "block", xs: "none" },
            width: DRAWER_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
              border: "soid red",
              background: theme.palette.primary.light,
              // padding:"5rem",
              color: theme.palette.primary.main,
              py: "3rem",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Link href="/">
            <Typography variant="h1" sx={{ px: { xs: "2rem", md: "1rem" } }}>
              WATCHLIST
            </Typography>
          </Link>
          {/* <Stack direction="column">
            <List>
              {[
                {
                  text: "Dashboard",
                  to: "/dashboard",
                  icon: LuLayoutDashboard,
                },
                { text: "User Management", to: "/Management", icon: MdPerson },
              ].map((item, index) => (
                <Link
                  href={item.to}
                  key={item.to}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    key={index}
                    disableGutters
                    disablePadding
                    sx={{
                      px: "2rem",
                      my: "2rem",
                      color: theme.palette.primary.main,
                      textDecoration: "none",
                      "&:hover": {
                        background: theme.palette.primary.main,
                        borderRadius: "10px",
                        color: theme.palette.primary.light,
                      },
                    }}
                  >
                    <ListItemButton>
                      <Stack direction="row" alignItems="center" gap="10px">
                        <Box sx={{ fontSize: "20px", mt:"0.55rem" }}>
                          <item.icon fontSize={"inherit"} />
                        </Box>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle2">
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
                px: "3rem",
                cursor: "pointer",
                "&:hover": {
                  background: theme.palette.primary.main,
                  borderRadius: "10px",
                  color: theme.palette.primary.light,
                  px: "4rem",
                  py:"1rem"
                },
              }}
            >
              <Stack direction="row" alignItems="center">
                <Box
                  mr={{ xs: "17px", md: "1.25vw" }}
                  sx={{ fontSize: "18px" }}
                >
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
          </Stack> */}

<Stack gap="1rem" mt="2rem" >
  <Link href="/dashboard">
    <Stack
      direction="row"
      // alignItems="center"
      // justifyContent="center"
      px="2rem"
       py="1rem"
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: "10px",
          color: theme.palette.primary.light,
           px: "3rem",
          py: "1rem",
        },
      }}
    >
      <Box mr={{ xs: "17px", md: "1.25vw" }} sx={{ fontSize: "20px", mt: "0.3rem" }}>
        <LuLayoutDashboard fontSize={"inherit"}  />
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{}}>
          Dashboard
        </Typography>
      </Box>
    </Stack>
  </Link>

  {/* Accordion */}
  <Link href="/usermanagement">
  <Accordion  
  sx={{ boxShadow: "none",
    px: "2rem",
    py: "1rem",
    color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
    color: theme.palette.primary.light,
    px: "2rem",
    py: "0.5rem",
  },}}
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
          <FaUpDownLeftRight fontSize={"inherit"}  />
        </Box>
        <Typography variant="subtitle1" sx={{ ml: 2, }}>
          User Management
        </Typography>
      </Box>
    </AccordionSummary>
    <AccordionDetails>
      <Link href="">
      <Box mt="-1rem" display="flex" flexDirection="row" justifyContent="center">
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
  </Link>

  {/* Link to LogOut */}
  <Link href="/logout">
    <Stack
     direction="row"
     alignItems="center"
     px= "2rem"
     py= "1rem"
    //  justifyContent="center"
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
      <Box mr={{ xs: "17px", md: "vw" }} sx={{ fontSize: "20px", mt: "0.5rem" }}>
        <RiLogoutBoxRLine fontSize={"inherit"}  />
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{  }}>
          LogOut
        </Typography>
      </Box>
    </Stack>
  </Link>
</Stack>
        </Drawer>
      </Box>
    </>
  );
}
