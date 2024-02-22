import { Box, Container, Stack } from "@mui/material";

interface AdminLayoutProps {
    children: React.ReactNode;
  }

export default function AdminLayOut({children}:AdminLayoutProps) {
    return(
        <>
        <Container
        sx={{
            bgcolor: "#F8F8FF",
          }}
          disableGutters
          maxWidth={false}>
            <Stack 
                >
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