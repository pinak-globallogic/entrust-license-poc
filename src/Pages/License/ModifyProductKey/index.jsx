import Content from "Layouts/Content/Content";
import ProductKey from "./ProductKey";
import LicenseDetails from "../Details";

const ModifyProductKeyWrapper = () => {
  return (
    <Content pt={5}>
      <ProductKey xs={8} />
      <LicenseDetails xs />
    </Content>
  );
};

export default ModifyProductKeyWrapper;
