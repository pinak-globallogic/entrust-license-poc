import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FaceIcon from "@mui/icons-material/Face";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LoginIcon from "@mui/icons-material/Login";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useState } from "react";

const AdminNav = ({ setAdminComponent, adminComponent }) => {
  const [openUR, setOpenUR] = useState(false);
  const [openAudit, setOpenAudit] = useState(false);

  const handleClick = () => {
    if (adminComponent !== 0) setAdminComponent(0);
    setOpenUR(!openUR);
  };

  const handleClickOpenAudit = () => {
    setOpenAudit(!openAudit);
  };

  return (
    <List
      sx={{
        width: "100%",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccountCircleIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="USER ROLES"
          primaryTypographyProps={{
            color: "primary",
            variant: "body2",
            fontWeight: "medium",
          }}
        />
        {openUR ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </ListItemButton>
      <Collapse in={openUR} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => setAdminComponent(3)}>
            <ListItemIcon>
              <AppsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sub Menu 1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => setAdminComponent(4)}>
            <ListItemIcon>
              <AppsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sub Menu 2" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton onClick={() => setAdminComponent(1)}>
        <ListItemIcon>
          <TuneIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="APP DEFINED FEATURES"
          primaryTypographyProps={{
            fontWeight: "medium",
            color: "primary",
            variant: "body2",
          }}
        />
      </ListItemButton>
      <Divider />
      <ListItemButton onClick={handleClickOpenAudit}>
        <ListItemIcon>
          <InsertChartIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="AUDIT"
          primaryTypographyProps={{
            fontWeight: "medium",
            color: "primary",
            variant: "body2",
          }}
        />
        {openAudit ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </ListItemButton>
      <Collapse in={openAudit} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => setAdminComponent(2)}>
            <ListItemIcon>
              <FaceIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="ACTIVITY LOG"
              primaryTypographyProps={{
                fontWeight: "medium",
                variant: "body2",
              }}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <LoginIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="LOGINS"
              primaryTypographyProps={{
                fontWeight: "medium",
                variant: "body2",
              }}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default AdminNav;
