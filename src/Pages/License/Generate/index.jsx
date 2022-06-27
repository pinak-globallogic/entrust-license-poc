import Content from "../../../Layouts/Main/Content";
import LicenseDetails from "../Details";
import GenerateLicense from "./GenerateLicense";

const GenerateLicenseWrapper = () => {
  return (
    <Content pt={5}>
      <GenerateLicense xs={5} />
      <LicenseDetails xs />
    </Content>
  );
};

export default GenerateLicenseWrapper;
