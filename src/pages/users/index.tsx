import {
    Box,
    Stack,
  } from "@mui/material";
  import UserManagementTable from "../../components/common/tabel/tabel";
  import AdminLayOut from "../../layout/admin";
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
            <UserManagementTable  />
          </Box>
        </Stack>
      </AdminLayOut>
    );
  }
  