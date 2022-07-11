import Content from "Layouts/Content/Content";
import UserRoles from "./UserRoles";
import AppFeatures from "./AppFeatures";
import { useContext } from "react";
import { AppContext } from "Layouts/Content/ApplicationContextProvider";
import Audit from "./Audit";
import SubMenu1 from "./SubMenu1";
import SubMenu2 from "./SubMenu2";

const AdminPanelWrapper = () => {
  const [adminComponent] = useContext(AppContext);
  const renderSwitch = (adminComponent) => {
    let component;

    switch (adminComponent) {
      case 0:
        component = <UserRoles />;
        break;
      case 1:
        component = <AppFeatures />;
        break;
      case 2:
        component = <Audit />;
        break;
      case 3:
        component = <SubMenu1 />;
        break;
      case 4:
        component = <SubMenu2 />;
        break;
    }

    return component;
  };

  const component = renderSwitch(adminComponent);

  return <Content>{component}</Content>;
};

export default AdminPanelWrapper;
