import { UserModel } from "@/lib/interface/Iregister";
import theme from "../../styles/theme/theme";
import { Box, Card, Stack, Typography, useTheme, Avatar } from "@mui/material";
import { getProfile } from "@/services/api/profile";
import Link from "next/link";
import React from "react";
import CardLoading from "../common/loading/cardloading";
import avatar from "../../images/avatar.png";
import { useGetUsers } from "@/hooks/query/allusers";

export default function DashoardUsers() {
  const theme = useTheme();
  const {data:users, loading } = useGetUsers();
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setLoading(true);
  //   getProfile()
  //     .then((resp) => {
  //       console.log({ resp });
  //       if (resp.length) {
  //         setData([...resp]);
  //       }
  //     })
  //     .catch((e) => {
  //       //handle error
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      <Stack
        columnGap="5rem"
        flexWrap="wrap"
        rowGap="1.5em"
        direction={{ md: "row", xs: "column", sm: "row" }}
      >
        <Card
          elevation={0}
          sx={{
            borderRadius: "20px",
            // mt: "1em",
            // width: "100%",
            flexGrow: 1,
            px: "26px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography variant="h4" color="primary" mt="2rem">
            Most Present Users
          </Typography>
          {loading ? (
            <CardLoading />
          ) : users ? (
            <>
              {users?.map((items: UserModel) => (
                <Box key={items.id}>
                  <Stack
                    sx={{
                      mt: "1rem",
                      mb: "1rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    direction="row"
                    justifyContent=""
                    minHeight=""
                    gap="3rem"
                  >
                    <Stack
                      sx={{ mt: "px" }}
                      display="flex"
                      direction="row"
                      gap="1rem"
                    >
                      <Avatar
                        src={avatar.src}
                        sx={{ width: "30px", height: "30px" }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          LineHeight: "32px",
                          // mt:"1rem"
                        }}
                        color="#7C7B7B"
                      >
                        {items.fullName}
                      </Typography>
                    </Stack>
                    <Typography
                      color="#7C7B7B"
                      alignItems="center"
                      variant="subtitle1"
                    >
                      {items.department}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </>
          ) : <>No Data yet</>}
        </Card>

        <Card
          elevation={0}
          sx={{
            borderRadius: "20px",
            // mt: "1em",
            // width: "100%",
            flexGrow: 1,
            px: "24px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Typography variant="h4" color="primary" mt="2rem">
            Most absent Users
          </Typography>
          {loading ? (
            <CardLoading />
          ) : users ? (
            <>
              {users?.map((items: UserModel) => (
                <Box key={items.id}>
                  <Stack
                    sx={{
                      mt: "1rem",
                      mb: "1rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    direction="row"
                    justifyContent=""
                    minHeight=""
                    gap="3rem"
                  >
                    <Stack
                      sx={{ mt: "px" }}
                      display="flex"
                      direction="row"
                      gap="1rem"
                    >
                      <Avatar
                        src={avatar.src}
                        sx={{ width: "30px", height: "30px" }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          LineHeight: "32px",
                        }}
                        color="#7C7B7B"
                      >
                        {items.fullName}
                      </Typography>
                    </Stack>
                    <Typography
                      color="#7C7B7B"
                      alignItems="center"
                      variant="subtitle1"
                    >
                      {items.department}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </>
          ): <>No data yet</>}
        </Card>
      </Stack>
    </>
  );
}
