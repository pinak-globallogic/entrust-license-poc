import Content from "Layouts/Content/Content";
//import ProductKey from "./ModifyProductKeyWizard";
import LicenseDetails from "../Details";
import ModifyProductKeyWizard from "./ModifyProductKeyWizard";

const ModifyProductKeyWrapper = () => {
  return (
    <Content>
      <ModifyProductKeyWizard xs={8} />
      <LicenseDetails xs />
    </Content>
  );
};

export default ModifyProductKeyWrapper;
