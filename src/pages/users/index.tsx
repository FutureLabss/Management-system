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
  import UserManagementTable from "../../components/common/tabel/tabel";
  import AdminLayOut from "@/layout/admin";
  import SearchInput from "../../components/common/search/search"
  import UsersStatis from "../../components/common/card/usersstatis"

  export default function UserManagement() {
  
    return (
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
    );
  }
  