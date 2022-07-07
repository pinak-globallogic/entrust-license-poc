import Dashboard from "./Dashboard";
import Content from "Layouts/Content/Content";

const DashboardWrapper = () => {
  return (
    <Content pt={5}>
      <Dashboard lg={10} xl={7} />
    </Content>
  );
};

export default DashboardWrapper;
