import Content from "layouts/main/Content";
import LicenseDetails from "../details";
import GenerateLicenseWizard from "./GenerateLicenseWizard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetGenerateLicenseState } from "redux/slices/generateLicenseSlice";

const GenerateLicenseWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetGenerateLicenseState());
  }, []);

  return (
    <Content>
      <GenerateLicenseWizard xs={8} />
      <LicenseDetails xs />
    </Content>
  );
};

export default GenerateLicenseWrapper;
