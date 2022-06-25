import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../Images/entrustLogo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    width: "10%",
    height: "40px",
    minWidth: "100px",
  },
  pipe: {
    padding: "5px 15px",
    fontSize: "30px",
  },
  avatar: {
    position: "absolute",
    right: "0px",
    color: "white",
  },
  heading1: {
    fontFamily: "Segoe UI",
    fontSize: "17px",
  },
  heading2: {
    fontFamily: "Segoe UI",
    fontSize: "11px",
  },
  avatarElement: {
    display: "inline-block",
    marginLeft: "5px",
  },
});

export default function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="logo.png" className={classes.logo} />

          <Typography variant="h5" gutterBottom component="div" className={classes.pipe}>
            |
          </Typography>

          <Typography variant="body1" gutterBottom className={classes.heading1}>
            Internal Licensing Tools
          </Typography>

          <div className={classes.avatar}>
            <AccountCircleIcon
              className={classes.avatarElement}
              fontSize="large"
            />
            <div className={classes.avatarElement}>
              <div className={classes.heading1}>myusername</div>
              <div className={classes.heading2}>Role: FulFillment</div>
            </div>
            <div
              className={classes.avatarElement}
              style={{ verticalAlign: "top" }}
            >
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
                disableElevation="true"
                size="small"
              >
                <ArrowDropDownIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} className={classes.heading2}>
                  Logout &ensp;
                  <LogoutIcon fontSize="small" />
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
