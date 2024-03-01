import { ICard } from "../../../lib/interface/ICard";
import theme from "../../../styles/theme/theme";
import { Box, Card, Stack, Typography, useTheme } from "@mui/material";

export default function StatisticsCard(props:ICard){
    const theme = useTheme()
    return(
        <>
        <Card
        elevation={0}
        sx={{
            borderRadius:"4px",
            mt:"5em",
            width:"100%",
            // maxWidth:"259px",
            
            px:"56px",
            backgroundColor: props.index == 1 ? "#08B5391A" : (props.index === 2 ? "#DAC7661A" : "#AB92921A")

           
        }}>

            <Stack sx={{mt:"3rem", mb:"2rem"}} direction="row" justifyContent="" minHeight="" gap="3rem">
                <Box color="#48A2E9"   mt="1rem">
                <props.icon size={56} color="inherit"/>
                </Box>
                <Stack>
                <Box sx={{mt:"px"}}>
                <Typography
                variant="h1"
                sx={{
                fontWeight:700, LineHeight:"32px"
                }}
                color={"primary"}
                >{props.numberofpeople}</Typography>
                </Box>
                <Typography alignItems="center" variant="h4">{props.gender}</Typography>
                </Stack>
            </Stack>
            
        </Card>
        </>
    )
}