import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

const AdminNav = () => {
  const [openUR, setOpenUR] = useState(false);
  const [openAudit, setOpenAudit] = useState(false);

  const handleClick = () => {
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
        {openUR ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={openUR} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AppsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sub Menu 1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AppsIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sub Menu 2" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton>
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
        {openAudit ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={openAudit} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
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
