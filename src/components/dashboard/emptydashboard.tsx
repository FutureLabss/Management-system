import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";
import file from '../../images/file.png'
import Image from "next/image";
import Link from "next/link";
import SuccessfullModal from "@/components/common/modal/thumbmodal/successul";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(90),
      width: '30%',
    //   border:"solid yellow",
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
        // border:"solid red"
      },
    },
  }));
  
export default function EmptyDashBoardPage(){
    const theme = useTheme();
   
  
    return(
        <>
            <Box px="3rem" py="2rem" height="100vh">
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by name or role "
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box textAlign="center" mt={15}>
            <Image src={file} alt="empty file"  width={200} height={200}/>
            <Typography variant="h6" sx={{color:"#7C7B7B",}}>No data to show <Link href={"/registeruser"}><span style={{color:"#48A2E9", fontSize:"24px"}}>Register New User</span></Link></Typography>
          </Box>

            </Box>
            
        </>
    )
}
