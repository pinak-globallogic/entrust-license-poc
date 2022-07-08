import Content from "Layouts/Content/Content";
import ProductKey from "./ModifyLicenseWizard";
import LicenseDetails from "../Details";

const ModifyProductKeyWrapper = () => {
  return (
    <Content>
      <ProductKey xs={8} />
      <LicenseDetails xs />
    </Content>
  );
};

export default ModifyProductKeyWrapper;
