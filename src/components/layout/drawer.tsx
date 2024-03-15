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
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FaUpDownLeftRight } from "react-icons/fa6";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DRAWER_WIDTH } from "@/lib/constants/layout";
import { IconType } from "react-icons";
import { useAuthContext } from "@/context/auth";

interface NavLinks {
  title: string;
  path: string;
  icon: IconType;
  children?: Omit<NavLinks, "icon">[];
  onClick?: () => void;
}

export default function DrawerLayout() {
  const router = useRouter();
  const currentPage = router.pathname;
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const {islLoggedIn, logout}=useAuthContext()
  
  const handleChange =
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const handleLogout = ()=>{
    logout();
    router.push('/login'); 
    console.log("logging out.....")
   
  };
  const links: NavLinks[] = [
    { title: "Dashboard", icon: LuLayoutDashboard, path: "/" },
    {
      title: "User Management",
      path: "/users",
      icon: FaUpDownLeftRight,
      children: [
        { title: "User History", path: "" },
        { title: "Present / Absent Users", path: "/users/presentusers" },
        { title: "Deactivated Users", path: "" },
      ],
    },
    { title: "Log Out", icon: RiLogoutBoxRLine, path: "/login", onClick: handleLogout},
  ];

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
              py: "1rem",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Link href="/">
            <Typography variant="h2" sx={{ px: { xs: "2rem", md: "1rem" } }}>
              WATCHLIST
            </Typography>
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
                    expandIcon={ item.children ? <ExpandMoreIcon />:<></>}
                    aria-controls="panel1bh-content" 
                    id="panel1bh-header"
                  >
                    <Box display="flex" alignItems="center">
                      <Box sx={{ fontSize: "20px", }}>
                        <item.icon fontSize={"inherit"} />
                      </Box>
                      <Typography variant="subtitle1" sx={{ ml: 2 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  {item.children?.length ? (
                    <>
                      {item.children?.map((child) => (
                        <AccordionDetails key={child.path}>
                          <Link href={child.path}>
                            <Box
                              mt="-1rem"
                              display="flex"
                              flexDirection="row"
                              justifyContent="center"
                            >
                              <Typography> {child.title} </Typography>
                            </Box>
                          </Link>
                        </AccordionDetails>
                      ))}{" "}
                    </>
                  ) : (
                    <></>
                  )}
                </Accordion>
              </Link>
            ))}
           
          </Stack>
        </Drawer>
      </Box>
    </>
  );
}

