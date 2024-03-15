import RoundButton from "@/components/common/roundbutton/roundbutton";
import { ILogin } from "@/lib/interface/Ilogin";
import { Box, Button, Stack, Typography } from "@mui/material";
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



export default function LoginPage() {
  const [data, setData] = React.useState<ILogin>({ email: "", password: "" })
  const [loading, setLoading] = React.useState(false)
  const {AdminLogin, error} = useAuthContext();
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
    } catch (e: any) {
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
            // border: "1px solid #48A2E9",
            // background: "#FFFFFF",
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
          <Typography color="error" variant="h6"
          sx={{ mt: "1rem", textAlign:"center" }}>{error}</Typography>
          <Box sx={{ mt: "2rem" }}>
            <TextField
              fullWidth
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter Email"
              id="fullWidth"
              sx={{ border: "#48A2E9" }}
            />
          </Box>
          <Box sx={{ mt: "2rem" }}>
            <OutlinedInput 
            fullWidth
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter Password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />
          </Box>
          <Typography
            sx={{
              textAlign: "end",
              mt: "0.75rem",
              color: "#7C7B7B",
              fontSize: "1rem",
              textTransform:"lowerCase"
            }}
          >
            FORGOT YOUR PASSWORD?
          </Typography>
          {loading ? (<CircularColor />)
          :(
            <RoundButton
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                mt: "2rem",
                width: "100%",
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              LOG IN
            </RoundButton>
          )}
          
        </Box>
      </Stack>
    </>
  );
}
