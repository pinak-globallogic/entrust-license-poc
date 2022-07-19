import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AppContext } from "layouts/main/ApplicationContextProvider";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { resetActivePage } from "redux/slices/customCardSlice";
import {
  ROUTE_ADMIN_PANEL,
  ROUTE_LICENSE_GENERATE,
  ROUTE_LICENSE_DASHBOARD,
  ROUTE_LICENSE_SEARCH,
  ROUTE_HOME,
  ROUTE_LICENSE_MODIFY,
  ROUTE_LICENSE_ACTIVATE,
} from "routes";
import AdminNav from "./AdminNav";

const title = "CANCEL AND GO BACK TO DASHBOARD";

const navMap = new Map();
navMap.set(ROUTE_HOME, {
  content: false,
});
navMap.set(ROUTE_LICENSE_DASHBOARD, {
  content: false,
});
navMap.set(ROUTE_LICENSE_GENERATE, {
  content: true,
  title,
});
navMap.set(ROUTE_LICENSE_SEARCH, {
  content: true,
  title,
});

navMap.set(ROUTE_ADMIN_PANEL, {
  content: true,
  title,
});

navMap.set(ROUTE_LICENSE_ACTIVATE, {
  content: true,
  title,
});

navMap.set(ROUTE_LICENSE_MODIFY, {
  content: true,
  title,
});

const Sidenav = (props) => {
  const location = useLocation();
  const [data, setData] = useState(navMap.get(ROUTE_HOME));
  const [isAdmin, setAdmin] = useState(false);
  const [adminComponent, setAdminComponent] = useContext(AppContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(navMap.get(location.pathname) || navMap.get(ROUTE_HOME));
    // check admin by URL
    setAdmin(location.pathname === ROUTE_ADMIN_PANEL ? true : false);
  }, [location]);

  return (
    <>
      {ROUTE_HOME !== location.pathname && (
        <Grid
          item
          container
          direction="column"
          {...props}
          style={isAdmin ? { backgroundColor: "white" } : {}}
        >
          {data.content && (
            <Link
              to={ROUTE_LICENSE_DASHBOARD}
              style={{ textDecoration: "none" }}
              onClick={() => dispatch(resetActivePage())}
            >
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                p={5}
                pt={8}
              >
                <Grid item xs={1} sx={{ fontWeight: 600 }}>
                  {"<"}
                </Grid>
                <Grid item xs marginLeft={1}>
                  <Typography
                    variant="caption"
                    pr={4}
                    marginLeft={1.5}
                    color="primary"
                    fontWeight={600}
                    lineHeight={0}
                  >
                    {" "}
                    BACK TO
                  </Typography>
                  <Typography
                    variant="caption"
                    pr={4}
                    color="primary"
                    fontWeight={600}
                    lineHeight={0}
                  >
                    {" "}
                    DASHBOARD
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          )}
          {isAdmin && (
            <AdminNav
              setAdminComponent={setAdminComponent}
              adminComponent={adminComponent}
            />
          )}
        </Grid>
      )}
    </>
  );
};

export default Sidenav;
