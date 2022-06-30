import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { AppContext } from "App";

// Custom
import Logo from "Assets/Images/entrust-logo.png";
import { withSnackbar } from "Components/Snackbar";
import Content from "Layouts/Content/Content";

const useStyles = makeStyles({
  card: {
    width: "600px !important",
    minHeight: "440px",
    background: "#fff",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    borderRadius: "4px",
    borderTop: "solid 2px #690070",
  },
  content: { padding: "4vh 4vh 0" },
  divider: {
    width: "100%",
    height: "1px",
  },
});

const initialState = {
  username: "admin",
  password: "admin",
};

const Login = ({ showMessage }) => {
  const { state, setState } = useContext(AppContext);
  const [loginData, setLoginData] = useState(initialState);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleInputChange = (event, property) => {
    setLoginData({ ...loginData, [property]: event.target.value });
  };

  const onSubmit = () => {
    if (loginData.username === "admin" && loginData.password === "admin") {
      localStorage.setItem("name", loginData.username);
      localStorage.setItem("role", "Fulfillment");
      setState({
        ...state,
        user: { name: loginData.username, role: "Fulfillment" },
      });
      navigate("/dashboard");
    } else {
      showMessage("Incorrect user credentials.");
    }
  };

  return (
    <Content
      direction="column"
      justifyContent="center"
      alignItems="center"
      pt={5}
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
          <img src={Logo} alt="Entrust Logo" width={280} loading="lazy" />
        </Grid>
        <Divider className={classes.divider} />
        <Grid xs item container direction="column" className={classes.content}>
          <Grid item container direction="column" xs={3}>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                Login
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Login to access licensing system.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            direction="column"
            xs={6}
          >
            <Grid item mb={2}>
              <TextField
                label="Enter User ID"
                variant="standard"
                size="small"
                required
                fullWidth
                value={loginData.username}
                onChange={(e) => handleInputChange(e, "username")}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Enter Password"
                variant="standard"
                size="small"
                required
                fullWidth
                type="password"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, "password")}
              />
            </Grid>
          </Grid>
          <Grid
            xs
            item
            container
            direction="column"
            justifyContent="start"
            alignItems="stretch"
          >
            <Button variant="contained" onClick={onSubmit}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Content>
  );
};

export default withSnackbar(Login);
