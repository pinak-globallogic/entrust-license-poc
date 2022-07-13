import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// MUI components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Custom
import Logo from "Assets/Images/entrust-logo.png";
import { withSnackbar } from "Components/Snackbar";
import Content from "Layouts/Content/Content";
import { ROUTE_LICENSE_DASHBOARD } from "Routes";
import { updateLogin } from "Redux/Slices/authSlice";

const useStyles = makeStyles({
  card: {
    width: "560px !important",
    minHeight: "500px",
    background: "#fff",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    borderRadius: "4px",
    padding: "30px 0px",
  },
  title: { padding: "2vh 4vh" },
  content: { padding: "2vh 4vh 0" },
  divider: {
    width: "60%",
    height: "1px",
  },
  inputBox: {
    maxHeight: "45px",
    maxWidth: "220px",
  },
});

const initialState = {
  username: "admin",
  password: "admin",
  showPassword: false,
};

const Login = ({ showMessage }) => {
  const [loginData, setLoginData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleInputChange = (event, property) => {
    setLoginData({ ...loginData, [property]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setLoginData({
      ...loginData,
      showPassword: !loginData.showPassword,
    });
  };

  const onSubmit = () => {
    if (loginData.username === "admin" && loginData.password === "admin") {
      const data = { name: loginData.username, role: "Fulfillment" };
      dispatch(updateLogin(data));
      navigate(ROUTE_LICENSE_DASHBOARD);
    } else {
      showMessage("Incorrect user credentials.");
    }
  };

  return (
    <Content
      direction="column"
      justifyContent="center"
      alignItems="center"
      pt={0}
    >
      <Grid
        item
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        className={classes.card}
      >
        <Grid item container justifyContent="center" alignItems="center" xs={3}>
          <img src={Logo} alt="Entrust Logo" width={210} loading="lazy" />
        </Grid>
        <Divider
          className={classes.divider}
          sx={{ borderBottomWidth: 1, borderColor: "#87189D" }}
        />
        <Typography
          id="login-title"
          variant="h5"
          gutterBottom
          component="div"
          className={classes.title}
        >
          Internal Licensing App
        </Typography>

        <Grid xs item container direction="column" className={classes.content}>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            xs={3}
          >
            <Grid item>
              <Typography id="login-subtitle" variant="subtitle2" gutterBottom>
                Sign in into your account
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            xs={6}
            mb={3}
          >
            <Grid item mb={2}>
              <FormControl variant="filled">
                <InputLabel htmlFor="filled-adornment-username">
                  {" "}
                  User Name{" "}
                </InputLabel>
                <FilledInput
                  id="username"
                  className={classes.inputBox}
                  type="text"
                  value={loginData.username}
                  onChange={(e) => handleInputChange(e, "username")}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  {" "}
                  Password{" "}
                </InputLabel>
                <FilledInput
                  id="password"
                  className={classes.inputBox}
                  type={loginData.showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, "password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        id="toggle-eye"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {loginData.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            xs
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              id="login"
              variant="contained"
              size="small"
              onClick={onSubmit}
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Content>
  );
};

export default withSnackbar(Login);
