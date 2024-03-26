import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import theme from "@/styles/theme/theme";
import { useGetResourcesQuery, usePaginationQuery } from '../../../hooks/helper/query';
import { getProfile } from "@/services/api/profile";
import { usePaginatedUsers } from "@/hooks/query/allusers";
import { IAPIFilter } from "@/lib/query";

interface IProps{
setFilter:React.Dispatch<React.SetStateAction<IAPIFilter>>,
filter: {},
activepage:number,
totalPages:number,
}

export default function BasicPagination(props:IProps) {
  const {setFilter} = props;
  const [activepage, setActivePage] = useState(1);
  const {totalPages, data}= usePaginatedUsers({page: activepage})
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>  {
    setActivePage(value);
    setFilter((prevs: any)=>({...prevs, page: value}))
  };

  return (
    <Stack
      spacing={1}
      sx={{ mx: "auto", alignItems: "center", mt: "2rem" }} 
      >
      {totalPages > 1 ? (
        <Pagination
          page={activepage}
          onChange={handleChange}
          count={totalPages}
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
          ) : (<> </>)
          }
    </Stack>
  );
}
