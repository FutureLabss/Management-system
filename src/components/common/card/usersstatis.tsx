import StatistData from "@/data/carddata";
import { ICard } from "@/lib/interface/ICard";
import Grid from "@mui/material/Grid/Grid";
import StatisticsCard from "./card";

export default function UsersStatis(){
    return(
        <>
        <Grid
            container
            rowSpacing={{ md: 7, xs: 2, sm: 2 }}
            columnSpacing={{ md: 12, xs: 2, sm: 2 }}
          >
            {StatistData.map((item: ICard) => (
              <Grid item md={4} xs={12} sm={6} key={item.field} display="flex">
                <StatisticsCard {...item} />
              </Grid>
            ))}
          </Grid>
        
        </>
    )
}