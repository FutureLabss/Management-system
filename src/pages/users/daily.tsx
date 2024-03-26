import BasicPagination from "@/components/common/pagination/paginaton";
import SearchInput from "@/components/common/search/search";
import UserDetailsTabs from "@/components/common/tabs/daily/daily";
import DailyUserTabel from "@/components/dashboard/tabel";
import AdminLayOut from "@/layout/admin";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

export default function PresentUsers(){
    const [value, setValue] = useState(0) 
    return(
        <AdminLayOut  title={""}>
            <Stack  direction="column" rowGap={{xs:"1.5em",md:"3em"}}>
            <Box>
            <SearchInput /> 
          </Box>
        <Box mx="auto" sx={{ width:"100%", maxWidth:500}}>
        <UserDetailsTabs
         onChange={setValue} 
        name1={"Daily"} 
        name2={"Weekly"} 
        name3={"Monthly"} 
        />
        </Box>
        <Box mt="1rem" width="100%">
         {value == 0 ? <DailyUserTabel /> : null }
         {value == 1 ? <DailyUserTabel /> : null }
         {value == 2 ? <DailyUserTabel /> : null }
      </Box>
      <Box>
        <BasicPagination />
      </Box>
            </Stack>
        </AdminLayOut>

    )
}

// UserDetailsTabs