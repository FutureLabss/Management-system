import RoundButton from "@/components/common/roundbutton/roundbutton";
import { ILogin } from "@/lib/interface/Ilogin";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useAuthContext } from "@/context/auth";
import CircularColor from "@/components/common/loading/buttonloading";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { GoDotFill } from "react-icons/go";
import OTPInput from "@/components/user/otpinput";



export default function UsersLoginPage() {
  const [data, setData] = React.useState<ILogin>({ email: "", password: "" })
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = useState<string[]>([]);
  const {AdminLogin, } = useAuthContext();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value });
}
const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
      setLoading(true);
     await AdminLogin(data)
      setLoading(false);
    } catch (e) {
      const loginError = e as Error
    setError( loginError.message?.split("\n") ?? [loginError.message])
      console.log("Error in Login:", error);
      setLoading(false);
    }
}
  return (
    <>
      <Stack sx={{ background: "#F8F8FF", mx: "auto", px:"1em", height: "100vh" }}>
        <Box
          component="form"
          onSubmit={handleClick}
          sx={{
            mx: "auto",
            width: {xs:"100%"},
            maxWidth: "550px",
            mt: "9rem",
            mb: "9rem",
            py: "3rem",
            px: {xs:"2rem", md:"7rem"},
          }}
        >
          <Typography
          variant="h2"
            sx={{ textAlign: "center", 
            color: "#48A2E9",
            }}
          >
            WATCHLIST
          </Typography>
          <Typography
          variant="subtitle1"
            sx={{ textAlign: "center", 
            color: "#48A2E9",
            }}
          >
          Reset Password
          </Typography>
          <Typography
          variant="body1"
            sx={{ textAlign: "center", 
            color: "#48A2E9",
            width:"100%",
            maxWidth:"100px",
            mx:"auto"
            }}
          >
          Enter the 5 digits code you received on
            your email.
          </Typography>
            {/* {error?.length ? (
            <Grid>
              {error?.map((e) => (
                <Typography key={e} color="error" variant="body2">
                  {" "}
                  <GoDotFill color="inherit" /> {e}
                </Typography>
              ))}
            </Grid>
          ) : null} */}
         <Box>
            <OTPInput />
         </Box>        

          {/* {loading ? (<CircularColor />)
          :(
            <RoundButton
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                mt: "2rem",
                width: "100%",
                color: "#fff",
                fontSize: "1rem",
              }}
            >
             Continue
            </RoundButton>
          )} */}
          
        </Box>
      </Stack>
    </>
  );
}
