import { createTheme } from "@mui/material";

const customBreakpoints = {
  xs: 55,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

let typographyList: { [key: string]: { md: string; xs: string; sm: string } } = {
  large: { xs: "24px", sm: "39px", md: "1rem" },
  h1: {xs:"1.5rem",sm:"2.5rem", md:"3rem"}, //fontsize 48
  h2: {xs:"1.33em", sm:"1.33em",md:"2rem"}, //fontsize 32
  h3: { xs: "1.67em", sm: "1.67em", md: "2rem" }, //fontsize 50
  h4: {xs:"1rem", sm:"1.5rem",md:"1.5rem"}, //fontsize 24
  h5: { xs: "1rem", sm: "1rem", md: "1.75rem" }, //fontsize 28
  h6: {xs:"1rem", sm:"1rem", md:"1.5rem"}, //fontsize 24
  subtitle2: { xs:"0.82rem", sm:"1rem", md:"1.25rem"}, //fontsize 20
  subtitle1: { xs:"0.82rem", sm:"1rem", md:"1.125rem"}, //fontsize 18
  body1: {xs:"1rem",  sm:"0.8rem", md: "0.75rem" }, //fontsize 16
  body2: {xs:"1rem",  sm:"0.875rem", md: "0.875" }, //fontsize 14
  caption:{xs:"0.55rem", sm:"0.55rem", md:"0.75rem"}, //fontsize 12
};
const customTypographyStyles = Object.keys(typographyList).reduce((acc: { [key: string]: any }, item: string) =>{
  const typography = typographyList[item];
  acc[item] = {
    fontSize: typography.md,
    [`@media (min-width: ${customBreakpoints.xs}px)`]: {
      fontSize: `${typography.xs}`,
    },
    [`@media (min-width: ${customBreakpoints.sm}px)`]: {
      fontSize: `${typography.sm}`,
    },
    [`@media (min-width: ${customBreakpoints.md}px)`]: {
      fontSize: `${typography.md}`,
    },
  };
  return acc;
}, {});

const theme = createTheme({
  breakpoints: {
    values: customBreakpoints,
  },
  palette: {
    primary: {
      main: "#48A2E9",
      light:"#FFFFFF",
    },
    secondary: {
      main: '#BF0000',
      light:"#7C7B7B",
    },
  },
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
      'Poppins',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    ...customTypographyStyles,
  },
});

export default theme;
