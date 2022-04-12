import React from "react";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import LogoImage from "../images/Logo.png";
import BgImage from "../images/BG.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "85px",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "275px",
    paddingRight: "275px",
    borderBottom: "1px solid #D6D6D6",
  },
  logo: {
    width: "79.57px",
    Height: "23.04px",
  },
  pages: {
    display: "flex",
    width: "557px",
    marginLeft: "172.46px",
  },
  page: {
    marginRight: "71px",
    whiteSpace: "nowrap",
    textTransform: "capitalize",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "283px",
    width: "277px",
  },
  bg: {
    backgroundImage: `url(${BgImage})`,
    height: "895px",
    width: "100%",
  },
  headline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "auto",
    width: "440px",
    marginLeft: "275px",
    paddingTop: "175px",
    borderRadius: "4px",
  },
}));

const pages = ["Why Alivio", "Solutions", "Community", "Pricing"];

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Box>
            <img src={LogoImage} alt="logo" className={classes.logo} />
          </Box>
          <Box className={classes.pages}>
            {pages.map((page) => (
              <Button key={page} size="small" className={classes.page}>
                {page}
              </Button>
            ))}
          </Box>
          <Box className={classes.buttons}>
            <Box>
              <Button size="small">Sign in</Button>
            </Box>
            <Box>
              <Button variant="contained" size="small">
                Start Trial
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className={classes.bg}>
        <Box className={classes.headline}>
          <Typography
            variant="beaaware"
            color="primary"
            gutterBottom
            sx={{ width: "440px", height: "148px" }}
          >
            Be aware, Manage well.
            <br />
          </Typography>
          <Typography
            variant="everyone"
            color="textPrimary"
            gutterBottom
            sx={{ width: "420px", height: "123px" }}
          >
            Everyone experiences stress in different ways. Let Alivio guide you,
            in a personalized journal experience, to overcome your stress.
            <br />
          </Typography>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            sx={{ marginTop: "18px" }}
          >
            Find Your Way
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
