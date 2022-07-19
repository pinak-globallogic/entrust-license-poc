import Content from "layouts/main/Content";
import ModifyProductKeyWizard from "./ModifyProductKeyWizard";
import SideCardDetails from "./side-card";

const ModifyProductKeyWrapper = () => {
  return (
    <Content>
      <ModifyProductKeyWizard xs={8} />
      <SideCardDetails xs />
    </Content>
  );
};

export default ModifyProductKeyWrapper;
