import AppBarLayout from "@/components/layout/appbar";
import DrawerLayout from "@/components/layout/drawer";
import { useAuthContext } from "@/context/auth";
import { DRAWER_WIDTH } from "@/lib/constants/layout";
import { Box, Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}
export default function AdminLayOut({ children, title }: AdminLayoutProps) {
  const { islLoggedIn, loaded } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!islLoggedIn && loaded) {
      router.push("/login");
    }
    console.log({islLoggedIn, loaded})
  }, [islLoggedIn, router, loaded]);

  return (
    <>{loaded && islLoggedIn ? 
      <Container
        sx={{
          backgroundColor: "#FFFFFF",
          // border:"solid blue",
        }}
        disableGutters
        maxWidth={false}
      >
        <Stack direction="row" columnGap={0}>
          <Box>
            <DrawerLayout />
          </Box>
          <Box
            sx={{
              backgroundColor: "#F0F0F0",
              flexGrow: 1,
              width:{xs: "100%", sm: `calc(100% - ${DRAWER_WIDTH})` },
              minHeight: `calc(100vh - 20px)` ,
            }}
          >
            <Box>
              <AppBarLayout title={title} />
            </Box>
            <Box  p={{xs:"1em",sm:"1.5rem", md:"3rem"}}>{children}</Box>
          </Box>
        </Stack>
      </Container>:<Box>Loading....</Box>}
    </>
  );
}
