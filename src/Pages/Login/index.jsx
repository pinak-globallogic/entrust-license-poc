import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Content from "../../Layouts/Content";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/logo.svg";
const initialState = {
  username: "admin",
  password: "admin",
};

const Login = () => {
  const [loginData, setLoginData] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = (event, property) => {
    setLoginData({ ...loginData, [property]: event.target.value });
  };

  const onSubmit = () => {
    if (loginData.username === "admin") {
      navigate("/license");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <span
        style={{
          height: "7vh",
          width: "100vw",
          background: "#6D2077",
          position: "absolute",
          zIndex: -1,
        }}
      ></span>
      <Content>
        <Grid item container justifyContent="center" alignItems="center">
          <Grid
            item
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            sx={{
              background: "#fff",
              padding: "2vh 4vh 6vh",
              maxWidth: 600,
              boxShadow:
                "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
              borderRadius: "1vh",
            }}
          >
            <Grid
              item
              container
              sx={{ width: "100%", marginBottom: "2vh" }}
              display="flex"
              justifyContent="center"
              direction="column"
              alignItems="stretch"
            >
              <img src={Logo} width={500} />
            </Grid>
            <Grid
              item
              container
              display="flex"
              justifyContent="center"
              direction="column"
              sx={{ width: "100%", marginBottom: "6vh" }}
            >
              <Grid item sx={{ marginBottom: "0.5vh" }}>
                <b>Login</b>
              </Grid>
              <Grid item sx={{ marginBottom: "3vh" }}>
                <p>Login to access IDaaS.</p>
              </Grid>
              <Grid item>
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
              {/* <Grid item>
                <TextField
                  label="Password"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  type="password"
                  sx={{ margin: "4vh 0 5vh" }}
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, "password")}
                />
              </Grid> */}
            </Grid>
            <Grid
              item
              container
              sx={{ width: "100%" }}
              display="flex"
              justifyContent="start"
              direction="row"
              alignItems="stretch"
            >
              <Grid
                item
                container
                xs={6}
                display="flex"
                alignItems="stretch"
                justifyContent="start"
              >
                <Button
                  variant="contained"
                  onClick={onSubmit}
                  sx={{ minWidth: "26vh" }}
                  color="secondary"
                >
                  Go Back
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={onSubmit}
                  sx={{ minWidth: "26vh" }}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </>
  );
};

export default Login;
