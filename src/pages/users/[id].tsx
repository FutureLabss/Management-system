import CardLoading from "@/components/common/loading/cardloading";
import SingleUserComponent from "@/components/userhistory";
import { useGetSingleUser } from "@/hooks/query/getsingleuser";
import AdminLayOut from "@/layout/admin";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export default function SingleUserHistory() {
  const router = useRouter();
  const { id } = router.query;
  const { data: user, loading } = useGetSingleUser(id as string);
  return (
    <AdminLayOut title={"User Detail"}>
      <Box>
        {loading ? (
          <CardLoading />
        ) : user ? (
          <SingleUserComponent {...user} />
        ) : (
          <p>No Data</p>
        )}
      </Box>
      {/* <Box>{user ? <SingleUserComponent {...user} /> : <p>No Data</p>}</Box> */}
    </AdminLayOut>
  );
}
