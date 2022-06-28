import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  title: "Generate Product Key"
});


export default function CustomSeparator() {
  const location = useLocation();
  const [data, setData] = useState(navMap.get("/"));

  useEffect(() => {
    setData(navMap.get(location.pathname) || navMap.get("/"));
    console.log(location.pathname);
  }, [location]);

  const breadcrumbs = [
    <Typography key="1">
      <Link to="/dashboard" style={{ color:"white", textDecoration: "none" }}>
        Internal Licensing Tools
      </Link>
    </Typography>,
    data.nav && data.content && (
      <Typography key="2" color="white">
        {data.title} 
      </Typography>
    ),
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" style={{ color: "white" }} />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
