import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ROUTE_ADMIN_PANEL,
  ROUTE_LICENSE_DASHBOARD,
  ROUTE_LICENSE_SEARCH,
} from "Routes";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const navMap = new Map();
navMap.set("/", {
  nav: false,
  content: false,
});
navMap.set("/license", {
  nav: false,
  content: false,
});
navMap.set("/license/generate", {
  nav: true,
  content: true,
  title: "Generate Product Key",
});

navMap.set(ROUTE_LICENSE_SEARCH, {
  nav: true,
  content: true,
  title: "License Key Explorer",
});

navMap.set(ROUTE_ADMIN_PANEL, {
  nav: true,
  content: true,
  title: "Admin Area",
});

export default function CustomSeparator() {
  const location = useLocation();
  const [data, setData] = useState(navMap.get("/"));

  useEffect(() => {
    setData(navMap.get(location.pathname) || navMap.get("/"));
  }, [location]);

  const breadcrumbs = [
    <Typography id="header-nav1" key="1">
      <Link
        to={ROUTE_LICENSE_DASHBOARD}
        style={{ color: "white", textDecoration: "none" }}
      >
        Internal Licensing Tools
      </Link>
    </Typography>,
    data.nav && data.content && (
      <Typography id="header-nav2" key="2" color="white">
        {data.title}
      </Typography>
    ),
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<ArrowRightIcon style={{ color: "white" }} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
