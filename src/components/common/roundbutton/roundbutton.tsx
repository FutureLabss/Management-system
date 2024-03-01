import styled from "@emotion/styled";
import {  Button } from "@mui/material"
type styling ={
    background: string ;
    RoundButton: string | number;
    border:string;
    variant?: string;
}
const RoundButton = styled(Button)(({ variant })=>{
    const style = {
        boxShadow: "none",
        background:"#48A2E9",
        padding: "10px 20px",
        textTransform:"none",
      }
      if (variant == "contained") {
        style.background = " #48A2E9"
      }else{
        style.background = "transparent"
      }
      return style
      

})
export default RoundButton;