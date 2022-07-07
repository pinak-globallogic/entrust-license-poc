import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LICENSE_SEARCH_PAGE_ROUTE } from "Routes";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const navMap = new Map();
navMap.set("/", {
  nav: false,
  content: false,
});
navMap.set("/dashboard", {
  nav: false,
  content: false,
});
navMap.set("/license/generate", {
  nav: true,
  content: true,
  title: "Generate Product Key",
});

navMap.set(LICENSE_SEARCH_PAGE_ROUTE, {
  nav: true,
  content: true,
  title: "License Key Explorer",
});

export default function CustomSeparator() {
  const location = useLocation();
  const [data, setData] = useState(navMap.get("/"));

  useEffect(() => {
    setData(navMap.get(location.pathname) || navMap.get("/"));
  }, [location]);

  const breadcrumbs = [
    <Typography id="header-nav1" key="1">
      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
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
