import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import theme from "@/styles/theme/theme";

export default function BasicPagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Stack
      spacing={1}
      sx={{  mx: "auto", alignItems: "center", mt:"2rem" }}
    >
      <Pagination
      page={page} 
      onChange={handleChange}
        count={10}
        color="primary"
        shape="rounded"
        sx={{
          ".MuiPaginationItem-root": {
            width: { xs: "15px", sm: "23px", md: "100%" },
            minHeight: { xs: "15px", sm: "23p", md: "2.43vw" },
          },
          ".Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            border: "none",
            color: "white",
          },
        }}
      />
    </Stack>
  );
}
