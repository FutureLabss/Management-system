import AdminLayOut from "@/layout/admin";
import { UserModel } from "@/lib/interface/Iregister";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "../../images/avatar.png";
import theme from "@/styles/theme/theme";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetUsers } from "@/hooks/query/allusers";
import TableLoading from "../../components/common/loading/tableloading";
import RoundButton from "../common/roundbutton/roundbutton";

interface TableColum {
  title: string;
  field: string;
}

const tableColumns: TableColum[] = [
  { title: "Date", field: "Date" },
  { title: "Time", field: "Time" },
  { title: "ClockIn", field: "ClockIn" },
];

const data = [{ title: "dsfds" }, { title: "dsfds" }, { title: "dsfds" }];

export default function SingleUserComponent(props: UserModel) {
  const { data: users, loading } = useGetUsers();
  return (
    <Stack direction="row">
      <Stack gap="0.5rem" border="1px solid gray">
        <Box>
          <Image
            src={props.avatarUrl ?? avatar.src}
            alt="users profile"
            width={220}
            height={220}
          />
        </Box>
        <Box mt="0.2rem">
          <Typography
            variant="h6"
            sx={{ color: theme.palette.secondary.light }}
          >
            FullName: {props.fullName}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.secondary.light }}
          >
            Email: {props.email}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.secondary.light }}
          >
            PhoneNumber: {props.phoneNumber}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.secondary.light }}
          >
            {" "}
            Skill: {props.department}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.secondary.light }}
          >
            {" "}
            {props.role}
          </Typography>
        </Box>
        <RoundButton
          variant="outlined"
          color="secondary"
          sx={{
            width: "100%",
            color: "#fff",
            fontSize: "1.5rem",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.light,
            },
          }}
        >
          Complete Registration
        </RoundButton>
      </Stack>

      <Stack mt="1rem">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead
              sx={{
                mb: 2,
                boxShadow: "none",
              }}
            >
              <TableRow
                sx={{
                  height: "7rem",
                  backgroundColor: "transparent",
                  "&:nth-of-type(odd)": {
                    backgroundColor: "#F0F0F0",
                    boxShadow: "none",
                    mb: 2,
                  },
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    height: "5rem",
                  },
                  // fontSize: 20,
                }}
              >
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Clock-Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                mt: 5,
                "& > tr:nth-of-type(odd)": {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              {data.map((item) => (
                <TableRow key={item.title} sx={{ backgroundColor: "transparent", borderBottom:"20px solid rgba(0,0,0,0.1)" }}>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Clock-Action</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}
