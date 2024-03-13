import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Box,
  IconButton,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { UserModel } from "@/lib/interface/Iregister";
import { getProfile } from "@/services/api/profile";
import TableLoading from "../loading/tableloading";
import avatar from "../../../images/avatar.png";
import SuggestionModal from "../modal/deactivationmodal/suggestmodal";
import { useDeactivateUser } from "@/hooks/mutation/deactivate";
import BasicPagination from "../pagination/paginaton";
import { useGetSingleUser } from "@/hooks/query/getsingleuser";
import { useRouter } from "next/router";
import { useGetUsers } from "@/hooks/query/allusers";
import SuccessModal from "../modal/deactivationmodal/successModal";

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

export default function UserManagementTable() {
  const theme = useTheme();
  const [activeUser, setActiveUser] = React.useState<UserModel>();
  const { mutate: deactivate, isLoading: actionLoader } = useDeactivateUser({
    onSuccess: () => {},
  });
  const router = useRouter();
  const { id }: any = router.query;
  const { data: users, loading:isLoading, isFetching } = useGetUsers();
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

  const handleOpenModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    userId: UserModel
  ) => {
    e.stopPropagation();
    setActiveUser(userId);
  };

  const handleCloseModal = () => {
    setActiveUser(undefined);
  };

  const handleDeactivateUser = async () => {
    if (!activeUser) return;
    try {
      await deactivate(activeUser);
      setOpenSuccessModal(true);
    } catch (error) {
      console.error("Error deactivating user:", error);
    }
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const handleEdit = () => {};

  const handleRedirect = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    router.push(`/users/${id}`);
  };

  return (
    <Box>
      <TableContainer component={Paper}>
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
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    fontSize: "1.125rem",
                  }}
                >
                  {col.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading  || isFetching? (
              <TableLoading />
            ) : users ? (
              <>
                {users?.map((row: UserModel) => (
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
                          fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
                          color: "#7C7B7B",
                          minWidth: "120px",
                        }}
                      >
                        {col.field === "fullName" ? (
                          <Stack direction="row" alignItems="center" gap="1rem">
                            <Avatar
                              src={avatar.src}
                              sx={{ width: "30px", height: "30px" }}
                            />
                            <Typography>{row.fullName}</Typography>
                          </Stack>
                        ) : col.field === "Action" ? (
                          <Stack direction="row" alignItems="center" gap="3rem">
                            <Chip
                              size="small"
                              label={row.status ? "Deactivate" : "Enable"}
                              color={row.status ? "secondary" : "primary"}
                              onClick={(e) => {
                                e.stopPropagation();

                                handleOpenModal(e, row);
                              }}
                            />
                            <IconButton
                              size="small"
                              aria-label="edit"
                              onClick={() => handleEdit()}
                            >
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
            ) : (
              <Box
                sx={{ border: "solid", width: "100%", maxWidth: 500 }}
                mx="auto"
              >
                <Typography
                  textAlign="center"
                  variant="h4"
                  sx={{ border: "solid red", width: "100%" }}
                >
                  No Data
                </Typography>
              </Box>
            )}
          </TableBody>
        </Table>
        <SuggestionModal
          open={!!activeUser?.id}
          status={!!activeUser?.status}
          onClose={handleCloseModal}
          onDeactivate={handleDeactivateUser}
        />
        <SuccessModal
          open={openSuccessModal}
          onClose={handleCloseSuccessModal}
        />
      </TableContainer>
      <Box>
        <BasicPagination />
      </Box>
    </Box>
  );
}
