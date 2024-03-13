import styled from "@emotion/styled";
import {  Button,ButtonProps,ButtonTypeMap } from "@mui/material"

const RoundButton = styled(Button)<ButtonProps>(({ variant }) => `
  background: ${variant === 'contained' ? '#48A2E9' : '#BF0000' };
  box-shadow: none;
  padding: 10px 20px;
  text-transform: none;
`);
export default RoundButton;