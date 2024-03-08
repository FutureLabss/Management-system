import {
    Box,
    Button,
    Grid,
    Stack,
    TextField,
    Typography,
    useTheme,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import InputAdornment from "@mui/material/InputAdornment";
  import IconButton from "@mui/material/IconButton";
  import { IoIosAddCircleOutline } from "react-icons/io";
  import RoundButton from "../roundbutton/roundbutton";
  import { RiTornadoFill } from "react-icons/ri";
  import Link from 'next/link'

export default function SearchInput(){
    return(
        <Stack
          direction={{ md: "row", xs: "column", sm: "column" }}
          gap={5}
          justifyContent="end"
          sx={{flexWrap:"wrap"}}
          alignItems="end"
        >
          <Box width="100%" maxWidth="500px">
            <TextField
              fullWidth
              type={"text"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Search..."
            />
          </Box>
          <Stack direction="row" gap="1rem">
            <Box sx={{
              
            }}>
              <Link href="/registeruser">
                <RoundButton
                  variant="contained"
                  color="primary"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem" },
                    padding: { xs: "px", sm: "px", md: "5px" }
                  }}
                  endIcon={<IoIosAddCircleOutline />}
                >
                  Register New User
                </RoundButton>
              </Link>
            </Box>
            <Box>
              <IconButton>
                <RiTornadoFill />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
    )
}