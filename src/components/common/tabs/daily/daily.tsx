import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from '@/styles/theme/theme';
import DailyUserTabel from '@/components/dashboard/tabel';



interface Props {
    name1?: string
    name2?: string
    name3?: string
    onChange?: (index: number) => void
  
  }
  
export default function UserDetailsTabs(props:Props) {
  const {name1, name2, name3, onChange} = props
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
     bgcolor: 'background.paper',
     borderRadius:" 15px",
     width:"100%"
      }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{
        style: {
        display: "none"
        }}}
        sx={{
        '.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF !important",
        fontSize:{md:"0.73rem", xs:"1rem"},
            fontWeight:"700",
            margin:"5px 10px",
            borderRadius: "20px",
        },
        borderRadius: "6px",
        }}
      >
        <Tab label={props.name1}
        color="primary"
         value="0" 
         />
        <Tab label={props.name2} 
         value="1" />
        <Tab label={props.name3} 
         value="2" />
      </Tabs>
      
    </Box>
  );
}