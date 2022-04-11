import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#01996D",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#424242",
      secondary2: "#292929",
    },
    background: {
      default: "#245852",
      paper: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      s9: 361,
      mobile: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Lato", "Georgia", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "24px",
          color: "#292929",
          width: "61px",
          height: "24px",
        },
        containedSizeSmall: {
          backgroundColor: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "4px",
          width: "183px",
          height: "51px",
          fontFamily: "lato",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "25px",
        },
        containedSizeMedium: {
          backgroundColor: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "4px",
          width: "227px",
          height: "65px",
          fontFamily: "lato",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "25px",
        },
        containedSizeLarge: {
          backgroundColor: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "4px",
          width: "240px",
          height: "65px",
          fontFamily: "lato",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "25px",
        },
      },
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "aliviofooter" },
          style: {
            fontFamily: "Lato",
            fontWeight: 900,
            fontSize: "40px",
            lineHeight: "54.64px",
          },
        },
        {
          props: { variant: "beaaware" },
          style: {
            fontFamily: "Georgia",
            fontWeight: 700,
            fontSize: "65px",
            lineHeight: "74px",
          },
        },
        {
          props: { variant: "understand" },
          style: {
            fontFamily: "Georgia",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "78.5px",
          },
        },
        {
          props: { variant: "personlize" },
          style: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "45px",
          },
        },
        {
          props: { variant: "your" },
          style: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "15.92px",
            lineHeight: "157%",
          },
        },
        {
          props: { variant: "how" },
          style: {
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "37.68px",
          },
        },
        {
          props: { variant: "see" },
          style: {
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "39.25px",
          },
        },
        {
          props: { variant: "price" },
          style: {
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "30px",
          },
        },
        {
          props: { variant: "customized" },
          style: {
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: "14.49px",
            lineHeight: "22.75px",
          },
        },
        {
          props: { variant: "alivio" },
          style: {
            fontFamily: "Lato",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "30px",
          },
        },
        {
          props: { variant: "everyone" },
          style: {
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "31px",
          },
        },
        {
          props: { variant: "anger" },
          style: {
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "10.62px",
            lineHeight: "16.67px",
          },
        },
        {
          props: { variant: "mikalya" },
          style: {
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "11.94px",
            lineHeight: "18.74px",
          },
        },
        {
          props: { variant: "03" },
          style: {
            fontFamily: "Georgia",
            fontWeight: 400,
            fontSize: "150px",
            lineHeight: "225px",
            color: "#01996D",
            opacity: "0.2",
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

const StyleProvider = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default StyleProvider;
