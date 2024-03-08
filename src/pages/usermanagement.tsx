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
import UserManagementTable from "../components/common/tabel/tabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { IoIosAddCircleOutline } from "react-icons/io";
import RoundButton from "../components/common/roundbutton/roundbutton";
import { RiTornadoFill } from "react-icons/ri";
import StatistData from "@/data/carddata";
import { ICard } from "@/lib/interface/ICard";
import StatisticsCard from "../components/common/card/card";
import Link from 'next/link'
import AdminLayOut from "@/layout/admin";
import SuggestionModal from "@/components/common/modal/deactivationmodal/suggestmodal";
import { useState } from "react";
import UsersStatis from "@/components/common/card/usersstatis";
import SearchInput from "@/components/common/search/search";

export default function userManagement() {

  return (
    <>
    <AdminLayOut  title={"User Management"}>
      <Stack direction="column" rowGap={{xs:"1.5em",md:"3em"}}>
        <Box>
          <SearchInput />
        </Box>
        <Box>
          <UsersStatis />
        </Box>
        <Box>
          <UserManagementTable clickable={true} />
        </Box>
      </Stack>
    </AdminLayOut>
    </>
  );
}
