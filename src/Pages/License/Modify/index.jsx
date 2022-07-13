import Content from "Layouts/Content/Content";
import ModifyProductKeyWizard from "./ModifyProductKeyWizard";
import SideCardDetails from "./SideCardDetails";

const ModifyProductKeyWrapper = () => {
  return (
    <Content>
      <ModifyProductKeyWizard xs={8} />
      <SideCardDetails xs />
    </Content>
  );
};

export default ModifyProductKeyWrapper;
