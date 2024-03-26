import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableData from "../../data/dailyusertabel";
import { ICreateData } from "../../lib/interface/ITabel";
import { Avatar, Box, IconButton,Chip, Stack, Typography, useTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { UserModel } from "@/lib/interface/Iregister";
import { getProfile } from "@/services/api/profile";
import TableLoading from "../common/loading/tableloading";
import avatar from '../../images/avatar.png'
import { useGetUsers } from "@/hooks/query/allusers";
import { useRouter } from "next/router";
import BasicPagination from "../common/pagination/paginaton";



interface TableColum {
  title: string;
  field: string;
  hasAvatar?: boolean;
}

const tableColumns: TableColum[] = [
  { title: "Username", field: "fullName" },
  { title: "Email", field: "email" },
  { title: "Role", field: "role" },
  { title: "Skills", field: "department" },
  { title: "Last clocked-in", field: "lastClockedIn" },
  { title: "Last clocked-out", field: "lastClockedOut" },
];

export default function UsersTabel() {
  const theme = useTheme();
  const router = useRouter();
  const { id }: any = router.query;
  const {data:users, loading, error } = useGetUsers();

  const handleRedirect = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    router.push(`/users/${id}`);
  };

  return (
    <TableContainer
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              borderBottom: "1px solid #E7ECEF",
              height: "3rem",
            }}
          >
            {tableColumns.map((col, index) => (
              <TableCell
              key={index}
                sx={{ color: theme.palette.primary.main, fontWeight: 700,
                fontSize:"1.125rem" }}
              >
                {col.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {/* {error && <Typography color="error">{error.message}</Typography>} */}
        {loading ? (
            <TableLoading />
          ) : users ? (
            <>
              {users.map((row: UserModel) => (
                <TableRow
                onClick={(e) => handleRedirect(e, row.id)}
                key={row.id ?? "34r3r"}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  {tableColumns.map((col, index) => (
                    <TableCell
                    key={index}
                      component="th"
                      scope="row"
                      sx={{
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.8rem",
                          md: "1rem",
                        },
                        color:"#7C7B7B",
                        minWidth:"120px"
                      }}
                    >
                      {col.field === "fullName" ? (
                      <Stack direction="row" alignItems="center" gap="1rem">
                        <Avatar src={avatar.src} sx={{width:"30px", height:"30px"}}/>
                        <Typography>{row.fullName}</Typography>
                      </Stack>
                      ) : (
                      row[col.field as keyof UserModel]
                    )}
                     </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          ):(<Typography>NO data yet</Typography>)}
        </TableBody>
      </Table>
     {/* <BasicPagination /> */}
    </TableContainer>
  );
}


