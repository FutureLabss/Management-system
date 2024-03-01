import AppBarLayout from "@/components/layout/appbar";
import DrawerLayout from "@/components/layout/drawer";
import { Box, Container, Stack } from "@mui/material";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}
const drawerWidth = 240;

export default function AdminLayOut({ children, title }: AdminLayoutProps) {
  return (
    <>
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
              width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Box>
              <AppBarLayout title={title} />
            </Box>
            <Box>{children}</Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
