import RoundButton from "@/components/common/roundbutton/roundbutton";
import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Stack sx={{ background: "#F8F8FF", mx: "auto", height: "100vh" }}>
        <Box
          component="form"
          sx={{
            mx: "auto",
            border: "1px solid #48A2E9",
            background: "#FFFFFF",
            width: "100%",
            maxWidth: "40%",
            minHeight: "70vh",
            mt: "9rem",
            mb: "9rem",
            py: "3rem",
            px: "7rem",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "3rem", 
            color: "#48A2E9" }}
          >
            WATCHLIST
          </Typography>
          <Box sx={{ mt: "3rem" }}>
            <TextField
              fullWidth
              label="Enter Email Address:"
              id="fullWidth"
              sx={{ border: "#48A2E9" }}
            />
          </Box>
          <Box sx={{ mt: "3rem" }}>
            <TextField fullWidth label="Enter Password" 
            id="fullWidth" />
          </Box>
          <Link href="/selectAction">
            <RoundButton
              variant="contained"
              color="primary"
              sx={{
                mt: "2rem",
                width: "100%",
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              LOG IN
            </RoundButton>
          </Link>
          <Typography
            sx={{
              textAlign: "end",
              mt: "1.5rem",
              color: "#7C7B7B",
              fontSize: "1rem",
            }}
          >
            FORGOT YOUR PASSWORD?
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
