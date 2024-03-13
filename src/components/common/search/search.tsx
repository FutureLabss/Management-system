import {
    Box,
    Stack,
    TextField,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import InputAdornment from "@mui/material/InputAdornment";
  import IconButton from "@mui/material/IconButton";
  import { IoIosAddCircleOutline } from "react-icons/io";
  import RoundButton from "../roundbutton/roundbutton";
  import { RiTornadoFill } from "react-icons/ri";
  import Link from 'next/link'
// import { Warning } from "@mui/icons-material";
import {useRouter} from "next/router";
import React from "react";
import WarningModal from "../../../components/common/modal/warningmodal/warning"

  

export default function SearchInput(){
  const router = useRouter();
  const [open, setOpen] = React.useState(false)
  const handleOpen = ()=>{
    let tokens = JSON.parse(localStorage.getItem("token") || "{}");
    const objectLength = Object.entries(tokens).length;
    console.log(objectLength);
    if(objectLength > 0){
        router.push("/registeruser")
    }
    else{
        setOpen(true)
    }
 }
 const handleClose = ()=>{
    setOpen(false)
 }
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
              {/* <Link href="/registeruser"> */}
                <RoundButton
                 onClick={handleOpen}
                  variant="contained"
                  color="primary"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "1rem", sm: "0.8rem", md: "1rem" },
                    padding: { xs: "px", sm: "px", md: "1em" }
                  }}
                  endIcon={<IoIosAddCircleOutline />}
                >
                  Register New User
                </RoundButton>
              {/* </Link> */}
            </Box>
            <Box>
              <IconButton>
                <RiTornadoFill />
              </IconButton>
            </Box>
          </Stack>
          <WarningModal  open={open} onClose={handleClose} />
        </Stack>
    )
}