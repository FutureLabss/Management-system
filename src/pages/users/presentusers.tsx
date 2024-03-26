import BasicPagination from "@/components/common/pagination/paginaton";
import SearchInput from "@/components/common/search/search";
import TwoScrollableTabs from "@/components/common/tabs/persent/presents";
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
        <TwoScrollableTabs
         onChange={setValue} 
         name1={"Most Present Users"} 
        name2={"Most Absent Users"} 
        />
        </Box>
        <Box mt="1rem" width="100%">
         {value == 0 ? <DailyUserTabel /> : null }
         {value == 1 ? <DailyUserTabel /> : null }
      </Box>
      <Box>
        {/* <BasicPagination /> */}
      </Box>
            </Stack>
        </AdminLayOut>

    )
}