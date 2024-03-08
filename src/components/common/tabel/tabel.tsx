import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, IconButton,Chip, Stack, Typography, useTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { UserModel } from "@/lib/interface/Iregister";
import { getProfile } from "@/services/api/profile";
import TableLoading from "../loading/tableloading";
// import OrderModal from '../modal/ordermodal';
import avatar from '../../../images/avatar.png'
import SuggestionModal from "../modal/deactivationmodal/suggestmodal";
import { useDeactivateUser } from "@/hooks/mutation/deactivate";
import BasicPagination from "../pagination/paginaton";



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
  { title: "Action", field: "Action" },
];

export default function UserManagementTable({ clickable }: { clickable: boolean }) {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<UserModel[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [isActive, setIsActive] = React.useState(true);
  const [open, setOpen] = React.useState<string | null>(null);
  const {mutate:deactivate, isLoading}= useDeactivateUser({ onSuccess: () => {} });

  const handleOpenModal = (userId: string) => {
    setOpen(userId);
  }

  const handleCloseModal = () => {
    setOpen(null);
  }
  const handleDeactivateUser = (userId: string) => {
    deactivate(userId)
    setIsActive(true)
   console.log(userId)
  };

  const handleReactivate=(userId: string)=>{
    deactivate(userId)
    setIsActive(true)
  }


  React.useEffect(() => {
    setLoading(true);
    getProfile()
      .then((resp) => {
        console.log({resp})
        if (resp.length) {
          setData([...resp]);
        }
      })
      .catch((e) => {
        //handle error
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {};

  const handleRedirect =(row: string)=>{

  }

  return (
    <Box>
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
          {loading ? (
            <TableLoading />
          ) : (
            <>
              {data.map((row: UserModel) => (
                <TableRow
                  onClick={() => handleRedirect(row.id)}
                  key={row.id ?? "34r3r"}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    // height: "1?rem",
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
                      ) : col.field === "Action" ? (
                      <Stack direction="row" alignItems="center" gap="3rem">
                        <Chip
                          size="small"
                          label={isActive ? "Deactivate" : "Enable"} 
                          color={isActive ? "secondary" : "primary"}
                          onClick={() => isActive ? handleOpenModal(row.id) : handleReactivate(row.id)} 
                      />
                        <IconButton size="small" aria-label="edit" onClick={() => handleEdit()}>
                          Edit
                        </IconButton>
                      </Stack>
                      ) : (
                      row[col.field as keyof UserModel]
                      )}
                     </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
      <SuggestionModal open={!!open} onClose={handleCloseModal} userId={open} onDeactivate={handleDeactivateUser} />
    </TableContainer>
    <Box>
      <BasicPagination />
    </Box>
    </Box>
  );
}
