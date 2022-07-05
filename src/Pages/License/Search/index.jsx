
import Content from "Layouts/Content/Content";
import SearchLicense from "./searchLicense";
import SearchLicenseDetails from "./SearchLicenseDetails";
const SearchLicenseWrapper = () => {
  return (
    <Content pt={5}>
      <SearchLicense />
      <SearchLicenseDetails/>
    </Content>
  );
};

export default SearchLicenseWrapper;
