import React from "react";
import ResponsiveAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../Assets/Images/entrust-logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomSeparator from "Components/CustomSeparator";
import { useSelector, useDispatch } from "react-redux";
import { setLoginDetails } from "Redux/Slices/loginSlice";

const useStyles = makeStyles({
  logo: {
    height: "40px",
  },
  pipe: {
    padding: "5px 15px",
  },
  avatar: {
    position: "absolute",
    right: "0px",
    color: "white",
  },
  heading1: {
    fontSize: "17px",
  },
  heading2: {
    fontSize: "11px",
  },
  avatarElement: {
    display: "inline-block",
    marginLeft: "5px",
  },
});

const navMap = new Map();
navMap.set("/", {
  nav: false,
  content: false,
});
navMap.set("/dashboard", {
  nav: true,
  content: true,
});
navMap.set("/license/generate", {
  nav: true,
  content: true,
});

export default function AppBar() {
  const loginDetails = useSelector((state) => state.login);
  console.log(loginDetails);
  const dispatch = useDispatch();
  const location = useLocation();
  const [data, setData] = useState(navMap.get("/"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  useEffect(() => {
    setData(navMap.get(location.pathname) || navMap.get("/"));
  }, [location]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(setLoginDetails({ name: "", role: "" }));
  };

  return (
    <>
      {data.nav && data.content && (
        <ResponsiveAppBar>
          <Container maxWidth>
            <Toolbar disableGutters>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <img
                  src={logo}
                  alt="entrust-logo.png"
                  className={classes.logo}
                />
              </Link>

              <Typography
                variant="h5"
                gutterBottom
                component="div"
                className={classes.pipe}
              >
                |
              </Typography>

              <CustomSeparator className={classes.heading1} />

              <div className={classes.avatar}>
                <AccountCircleIcon
                  className={classes.avatarElement}
                  fontSize="large"
                />
                <div className={classes.avatarElement}>
                  <div className={classes.heading1}>{loginDetails.name}</div>
                  <div className={classes.heading2}>
                    Role: {loginDetails.role}
                  </div>
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
                    disableElevation
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
                    <MenuItem className={classes.heading2}>
                      <Link
                        to="/"
                        onClick={handleLogout}
                        style={{ textDecoration: "none" }}
                      >
                        <LogoutIcon
                          fontSize="small"
                          style={{ verticalAlign: "sub" }}
                        />
                        &ensp; Logout
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </Toolbar>
          </Container>
        </ResponsiveAppBar>
      )}
    </>
  );
}
