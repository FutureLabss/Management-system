import { ICard } from "../../../lib/interface/ICard";
import { Box, Card, Stack, Typography } from "@mui/material";

export default function StatisticsCard(item:ICard) {
  return (
    <>
      <Card
      elevation={0}
      key={item.field}
        sx={{
          borderRadius: "4px",
          width: "100%",
          display:"flex",
          px: "24px",
          backgroundColor: item.color || "#08B5391A",
        }}
      >
        <Stack
          sx={{
            mt: "3rem",
            mb: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          direction="row"
          justifyContent=""
          minHeight=""
          gap="3rem"
        >
          <Box color="#48A2E9" mt="1rem">
            <item.icon size={48} color="inherit" />
          </Box>
          <Stack sx={{flexWrap:"wrap"}}>
            <Box sx={{ mt: "px" }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  LineHeight: "32px",
                }}
                color={"primary"}
              >
                {item.value}
              </Typography>
            </Box>
            <Typography alignItems="center" variant="h4">
              {item.gender}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
