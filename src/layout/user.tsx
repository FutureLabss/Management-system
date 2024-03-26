import SimpleBackdrop from "@/components/common/loading/backdrop/homepage";
import AppBarLayout from "@/components/layout/admn/appbar";
import UserAppBarLayout from "@/components/layout/user/appbar";
import SideBarLayout from "@/components/layout/user/sidebar";
import { useAuthContext } from "@/context/auth";
import { DRAWER_WIDTH } from "@/lib/constants/layout";
import { Box, Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}
export default function UserLayOut({ children, title }: AdminLayoutProps) {
  const { islLoggedIn, loaded } = useAuthContext();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!islLoggedIn && loaded) {
      router.push("/login");
    }else if(loaded){
        setOpen(true);
    }
    console.log({islLoggedIn, loaded})
  }, [islLoggedIn, router, loaded]);

  return (
    <>{loaded && islLoggedIn ? 
      <Container
        sx={{
          backgroundColor: "#FFFFFF",
        }}
        disableGutters
        maxWidth={false}
      >
        <Stack direction="row" columnGap={0}>
          <Box>
            <SideBarLayout />
          </Box>
          <Box
            sx={{
              backgroundColor: "#F0F0F0",
              flexGrow: 1,
              width:{xs: "100%", sm: `calc(100% - ${DRAWER_WIDTH})` },
              minHeight: `calc(100vh - 1px)` ,
            }}
          >
            <Box>
              <UserAppBarLayout title={title} />
            </Box>
            <Box  p={{xs:"1em",sm:"1.5rem", md:"3rem"}}>{children}</Box>
          </Box>
        </Stack>
      </Container>:<Box><SimpleBackdrop open={open} onClose={handleClose} /></Box>}
    </>
  );
}
