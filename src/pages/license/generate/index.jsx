import Content from "layouts/main/Content";
import LicenseDetails from "../details";
import GenerateLicenseWizard from "./GenerateLicenseWizard";

const GenerateLicenseWrapper = () => {
  return (
    <Content>
      <GenerateLicenseWizard xs={8} />
      <LicenseDetails xs />
    </Content>
  );
};

export default GenerateLicenseWrapper;
