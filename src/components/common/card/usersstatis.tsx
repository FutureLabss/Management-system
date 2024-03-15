import StatistData from "@/data/carddata";
import { ICard } from "@/lib/interface/ICard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import StatisticsCard from "./card";
import { useUsersStats } from "@/hooks/query/stats";
import { IStats } from "@/lib/interface/IStats";

export default function UsersStatis() {
  const {data:stats}=useUsersStats()
  return (
    <Stack direction="row" flexWrap="wrap" width="100%" justifyContent={"space-between"} gap="1rem">
      {StatistData.map((item: ICard) => (
        <Box key={item.field} maxWidth={{ md: "18rem" }}  display="flex" flexGrow={1}>
          <StatisticsCard {...item} value={stats?.[item.field as keyof IStats] ?? 0} />
        </Box>
      ))}
    </Stack>
  );
}
