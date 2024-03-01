import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  IconButton,
  Stack,
  Box,
  Avatar,
  AvatarGroup,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";


export default function TabelLoading() {
    return (
      <TableRow
        sx={{
          borderTop: "0.83vw solid #F5F5F5",
          bgcolor: "white",
          borderBottom: "0.5px solid #E0E0E0",
        }}
      >
        <TableCell component="th" scope="row">
          <Stack
            direction="row"
            spacing={{ xs: "17px", sm: "27px", md: "2.78vw" }}
          >
            <Box>
              <Avatar
                sx={{
                  width: { xs: "34px", md: "2.50vw" },
                  height: { xs: "34px", md: "2.50vw" },
                }}
              >
                <Skeleton
                  animation="wave"
                  sx={{
                    bgcolor: "#F5F5F5",
                    width: { xs: "27px", sm: "43px", md: "4.44vw" },
                    height: { xs: "27px", sm: "43px", md: "4.44vw" },
                  }}
                  variant="circular"
                />
              </Avatar>
            </Box>
            <Box>
              <Box>
                <Skeleton
                  animation="wave"
                  sx={{
                    bgcolor: "#F5F5F5",
                    width: { xs: "42px", sm: "67px", md: "6.94vw" },
                    height: { xs: "4px", sm: "7px", md: "0.69vw" },
                  }}
                  // height={10}
                  // width={100}
                  style={{ marginBottom: 6 }}
                />
              </Box>
            </Box>
          </Stack>
        </TableCell>

        
        <TableCell sx={{ fontSize: { xs: "0.67em", md: "1.11vw" } }}>
          <Skeleton
            animation="wave"
            sx={{
              bgcolor: "#F5F5F5",
              width: { xs: "42px", sm: "67px", md: "6.94vw" },
              height: { xs: "4px", sm: "7px", md: "0.69vw" },
            }}
            style={{ marginBottom: 6 }}
          />
          
        </TableCell>
        <TableCell sx={{ fontSize: { xs: "0.67em", md: "1.11vw" } }}>
          <Skeleton
            animation="wave"
            sx={{
              bgcolor: "#F5F5F5",
              width: { xs: "42px", sm: "67px", md: "6.94vw" },
              height: { xs: "4px", sm: "7px", md: "0.69vw" },
            }}
            style={{ marginBottom: 6 }}
          />
          
        </TableCell>
        <TableCell sx={{ fontSize: { xs: "0.67em", md: "1.11vw" } }}>
          <Skeleton
            animation="wave"
            sx={{
              bgcolor: "#F5F5F5",
              width: { xs: "42px", sm: "67px", md: "6.94vw" },
              height: { xs: "4px", sm: "7px", md: "0.69vw" },
            }}
            style={{ marginBottom: 6 }}
          />
          
        </TableCell>
        <TableCell sx={{ fontSize: { xs: "0.67em", md: "1.11vw" } }}>
          <Skeleton
            animation="wave"
            sx={{
              bgcolor: "#F5F5F5",
              width: { xs: "42px", sm: "67px", md: "6.94vw" },
              height: { xs: "4px", sm: "7px", md: "0.69vw" },
            }}
            style={{ marginBottom: 6 }}
          />
          
        </TableCell>
        <TableCell sx={{ fontSize: { xs: "0.67em", md: "1.11vw" } }}>
          <Stack direction="row" gap="2rem">
          <Skeleton
            animation="wave"
            sx={{
              bgcolor: "#F5F5F5",
              width: { xs: "42px", sm: "67px", md: "6.94vw" },
              height: { xs: "4px", sm: "7px", md: "0.69vw" },
            }}
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation="wave"
            sx={{
              bgcolor: "#F5F5F5",
              width: { xs: "42px", sm: "67px", md: "6.94vw" },
              height: { xs: "4px", sm: "7px", md: "0.69vw" },
            }}
            style={{ marginBottom: 6 }}
          />
          </Stack>
        </TableCell>
        
      </TableRow>
    );
  }
  