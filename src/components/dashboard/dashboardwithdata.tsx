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
import DailyUserTabel from "./tabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { IoIosAddCircleOutline } from "react-icons/io";
import RoundButton from "../common/roundbutton/roundbutton";
import { RiTornadoFill } from "react-icons/ri";
import StatistData from "@/data/carddata";
import { ICard } from "@/lib/interface/ICard";
import StatisticsCard from "../common/card/card";
import Link from "next/link";
import DashoardUsers from "./card";
import UsersStatis from "../common/card/usersstatis";
import SearchInput from "../common/search/search";

export default function DashBoardWithData() {
  return (
    <>
      <Stack direction="column" rowGap={{xs:"1.5em",md:"3em"}}>
        <Box>
          <SearchInput />
        </Box>
        <Box>
          <UsersStatis />
        </Box>
        <Box>
          <DailyUserTabel />
        </Box>
        <Box>
          <DashoardUsers />
        </Box>
      </Stack>
    </>
  );
}
