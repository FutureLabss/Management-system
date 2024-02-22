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
        // border:"solid red",
        padding: "10px 20px",
        // innerWidth:"50%",
        // maxWidth:"50%",
        textTransform:"none",
        // position:"fixed",
      }
      if (variant == "contained") {
        style.background = " #48A2E9"
        // style.background = "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"
      }else{
        style.background = "transparent"
      }
      return style
      

})
export default RoundButton;