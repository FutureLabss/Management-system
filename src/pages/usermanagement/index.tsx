import SearchInputUser from "@/components/user/search";
import UserLayOut from "@/layout/user";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "../../images/avatar.png"
import UsersTable from "@/components/user/table";


export default function UserDashboard(){
    return(
        <>
        <UserLayOut  title={"Dasboard"} >
            <Box>
                <SearchInputUser />
            </Box>
            <Stack direction="row" gap="1rem" mt="3rem">
                <Box>
                <Image 
                src={avatar}
                alt=""
                width={100}
                height={100}
                />
                </Box>
                <Box mt="1.5rem">
                <Typography>Sarah Smith</Typography>
                <Typography>UI/UX Designer</Typography>
                <Typography>Mentee</Typography>
                </Box>

            </Stack>
            <Box mt="2rem">
                <UsersTable />
            </Box>


        </UserLayOut>
        </>
    )
}