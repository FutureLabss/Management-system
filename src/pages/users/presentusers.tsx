import SearchInput from "@/components/common/search/search";
import TwoScrollableTabs from "@/components/common/tabs/persent/presents";
import AdminLayOut from "@/layout/admin";
import { Box, Stack } from "@mui/material";

export default function PresentUsers(){
    return(
        <AdminLayOut  title={""}>
            <Stack  direction="column" rowGap={{xs:"1.5em",md:"3em"}}>
            <Box>
            <SearchInput /> 
          </Box>
        <Box mx="auto">
        <TwoScrollableTabs />
        </Box>
            </Stack>
        </AdminLayOut>

    )
}