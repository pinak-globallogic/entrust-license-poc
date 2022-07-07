import Content from "Layouts/Content/Content";
import SearchLicense from "./SearchLicense";
import SearchLicenseDetails from "./Details/SearchLicenseDetails";

const SearchLicenseWrapper = () => {
  return (
    <Content>
      <SearchLicense />
      <SearchLicenseDetails />
    </Content>
  );
};

export default SearchLicenseWrapper;
