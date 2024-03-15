import RoundButton from "@/components/common/roundbutton/roundbutton";
import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "next/link";

export default function SelectActionPage() {
  return (
    <>
      <Stack sx={{ background: "#F8F8FF", mx: "auto", px:"2em", height: "100vh" }}>
        <Box
          sx={{
            mx: "auto",
            border: "1px solid #48A2E9",
            background: "#FFFFFF",
            width: "100%",
            maxWidth: "550px",
            minHeight: "70vh",
            mt: "9rem",
            py: "8rem",
            px: {xs:"2rem", md:"7rem"},
          }}
        >
            <Typography
           variant="h1"
              sx={{ textAlign: "center", color: "#48A2E9" }}
            >
              Select Action
            </Typography>
              <Link href="/dashboard">
              <RoundButton
              variant="outlined"
              sx={{
                mt: "3rem",
                width: "100%",
                color:"#48A2E9",
                fontSize: "1.5rem"
              }}
            >
             Clock Action
            </RoundButton>
              </Link>
            <RoundButton
              variant="contained"
              color="primary"
              sx={{
                mt: "3rem",
                width: "100%",
                color: "#fff",
                fontSize: "1.5rem"
              }}
            >
              User- Management
            </RoundButton>
        </Box>
      </Stack>
    </>
  );
}
