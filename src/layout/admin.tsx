import AppBarLayout from "@/components/layout/appbar";
import DrawerLayout from "@/components/layout/drawer";
import { DRAWER_WIDTH } from "@/lib/constants/layout";
import { Box, Container, Stack } from "@mui/material";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}
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
              width: { xs: "100%", sm: `calc(100% - ${DRAWER_WIDTH})` },
            }}
          >
            <Box>
              <AppBarLayout title={title} />
            </Box>
            <Box  p={{xs:"1em",sm:"1.5rem", md:"3rem"}}>{children}</Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
