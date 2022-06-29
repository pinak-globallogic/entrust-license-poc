import Content from "../../../Layouts/Content/Content";
import LicenseDetails from "../Details";
import GenerateLicense from "./GenerateLicense";

const GenerateLicenseWrapper = () => {
  return (
    <Content pt={5}>
      <GenerateLicense xs={8} />
      <LicenseDetails xs />
    </Content>
  );
};

export default GenerateLicenseWrapper;
