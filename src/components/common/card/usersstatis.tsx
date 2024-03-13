import StatistData from "@/data/carddata";
import { ICard } from "@/lib/interface/ICard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import StatisticsCard from "./card";

export default function UsersStatis() {
  return (
    // <Grid
    //     container
    //     rowSpacing={{ md: 7, xs: 2, sm: 2 }}
    //     columnSpacing={{ md: 2, xs: 2, sm: 2 }}
    //   >
    //     {StatistData.map((item: ICard) => (
    //       <Grid item md={4} xs={12} sm={6} key={item.field} display="flex">
    //         <StatisticsCard {...item} />
    //       </Grid>
    //     ))}
    //   </Grid>
    <Stack direction="row" flexWrap="wrap" width="100%" justifyContent={"space-between"} gap="1rem">
      {StatistData.map((item: ICard) => (
        <Box key={item.field} maxWidth={{ md: "280px" }} flexGrow={1}>
          <StatisticsCard {...item} />
        </Box>
      ))}
    </Stack>
  );
}
