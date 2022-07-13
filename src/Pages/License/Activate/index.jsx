import DisplayDetails from "./DisplayDetails";
import ActivateLicenseWizard from "./ActivateLicenseWizard";
import Content from "Layouts/Content/Content";

const ActivateLicenseWrapper = () => {
  return (
    <Content pt={2}>
      <ActivateLicenseWizard xs={7} />
      <DisplayDetails xs />
    </Content>
  );
};

export default ActivateLicenseWrapper;
