import DashBoardWithData from "@/components/dashboard/dashboardwithdata";
import EmptyDashBoardPage from "@/components/dashboard/emptydashboard";
import AdminLayOut from "@/layout/admin";
import { Box } from "@mui/material";

export default function DashBoardPage() {
  return (
    <>
      <AdminLayOut title={"DashBoard"}>
        <Box>
          {/* {
                    "userisRegister" ? 
                    (
                        <EmptyDashBoardPage />  
                    ):(<DashBoardWithData /> )
                } */}
          {/* <DashBoardWithData />   */}
          {"userisRegister" ? <DashBoardWithData /> : <EmptyDashBoardPage />}
        </Box>
      </AdminLayOut>
    </>
  );
}
