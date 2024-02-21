import { Box, Container, Stack } from "@mui/material";

interface AdminLayoutProps {
    children: React.ReactNode;
  }

export default function AdminLayOut({children}:AdminLayoutProps) {
    return(
        <>
        <Container
        sx={{
            bgcolor: "#FFFFF",
          }}
          disableGutters
          maxWidth={false}>

            <Stack direction="row" columnGap={0}>
            <Box>

            </Box>
            <Box>
            {children}
            </Box>
            </Stack>
        </Container>
        
        </>
    )
    
}