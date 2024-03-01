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
  import { styled, alpha } from "@mui/material/styles";
  import InputBase from "@mui/material/InputBase";
  import DailyUserTabel from "../components/dashboard/tabel";
  import InputAdornment from "@mui/material/InputAdornment";
  import IconButton from "@mui/material/IconButton";
  import { IoIosAddCircleOutline } from "react-icons/io";
  import RoundButton from "../components/common/roundbutton/roundbutton";
  import { RiTornadoFill } from "react-icons/ri";
  import StatistData from "@/data/carddata";
  import { ICard } from "@/lib/interface/ICard";
  import StatisticsCard from "../components/common/card/card";
  import { FaCircleArrowDown } from "react-icons/fa6";
  
  
  import Link from 'next/link'
  
  export default function DashBoardWithData() {
    return (
      <>
        <Box px="3rem" py="2rem" >
          <Stack
            direction={{ md: "row", xs: "column", sm: "column" }}
            gap={5}
            justifyContent="end"
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
              <Box>
                <Link href="/registeruser">
                  <RoundButton
                    variant="contained"
                    color="primary"
                    sx={{
                      color: "#fff",
                      fontSize: "1.5rem",
                    }}
                    endIcon={<IoIosAddCircleOutline />}
                  >
                    Register New User
                  </RoundButton>
                </Link>
              </Box>
              <Box >
                <IconButton color="#48A2E9" >
                <FaCircleArrowDown  color="inherit" size={26}/>
                </IconButton>
              </Box>
            </Stack>
          </Stack>
          <Box>
            <Grid
              container
              rowSpacing={{ md: 7, xs: 2, sm: 2 }}
              columnSpacing={{ md: 12, xs: 2, sm: 2 }}
            >
              {StatistData.map((item: ICard) => (
                <Grid item md={4} xs={12} sm={6} display="flex">
                  <StatisticsCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box>
            <DailyUserTabel clickable={false} />
          </Box>
        </Box>
      </>
    );
  }
  