import Content from "Layouts/Content/Content";
import LicenseDetails from "../Details";
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
