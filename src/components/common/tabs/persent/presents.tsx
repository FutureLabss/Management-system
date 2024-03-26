import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from '@/styles/theme/theme';
import DailyUserTabel from '@/components/dashboard/tabel';



interface Props {
    name1?: string
    name2?: string
    onChange?: (index: number) => void
  
  }
  
export default function ScrollableTabsButtonPrevent(props:Props) {
  const {name1, name2, onChange} = props
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
      </Tabs>
      
    </Box>
  );
}












































// import * as React from 'react';

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { ArrowFunction } from 'typescript';
// import Badge from '@mui/material/Badge';
// // import TabList from '@mui/lab/TabList';

// interface Props {
//   name1?: string
//   name2?: string
//   onChange?: (index: number) => void

// }

// export default function TwoScrollableTabs(props: Props) {
//   const { name1, name2, onChange } = props
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//     onChange && onChange(newValue);
//   };

//   return (
//     <Box sx={{ maxWidth:{md:"30vw", xs:"100%"}, background: "#F9FAFB", 
//     mx:{md:"auto", xs:"20px"},
//     borderRadius:" 8px",
//     border: "1px solid var(--gray-100, #F2F4F7)",
//     // minHeight:{md:"33%", xs:""}
//      }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         TabIndicatorProps={{
//           style: {
//             display: "none"
//           }
//         }}

//         variant="fullWidth"
//         aria-label="full width tabs example"
//         sx={{
//           maxWidth: "100%", 
//           '  .Mui-selected': {
//             backgroundColor: "#BF0000",
//             color: "#FFFFFF !important",
//             fontSize:{md:"0.833rem", xs:"1rem"},
//              fontWeight:"700",
//           },
//           borderRadius: "6px",
//           // padding:"5px 6px",
//         }}
//       >
//         <Tab label={props.name1}
//          icon={<Badge badgeContent={2} color="primary"  />}
//          iconPosition="end"
//          sx={{ borderRadius: "6px", 
//          width: "100%",  
//          textTransform: "none", 
//          minHeight:"50px",
//          fontSize:"0.833rem",
//          fontWeight:"500",
//          "& .MuiBadge-badge": {
//           transform: "translateX(20px) translateY(-10px)",
//         },
//          }}

//           />
//          <Tab label={props.name2}
//         //  icon={<Badge badgeContent={2} color="primary"  />}
//         //  iconPosition="end"
//          sx={{ borderRadius: "6px", 
//          width: "100%",  
//          textTransform: "none", fontSize:"0.833rem",
//          fontWeight:"500",
//          "& .MuiBadge-badge": {
//           transform: "translateX(20px) translateY(-10px)",
//         },
//          }}
//           />
//       </Tabs>
//     </Box>
//   );
// }