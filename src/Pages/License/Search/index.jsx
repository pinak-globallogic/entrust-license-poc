import Content from "Layouts/Content/Content";

import SearchLicenseDetails from "./Details/SearchLicenseDetails";
import SearchLicense from "./SearchLicense";

const SearchLicenseWrapper = () => {
  return (
    <Content>
      <SearchLicense />
      <SearchLicenseDetails />
    </Content>
  );
};

export default SearchLicenseWrapper;
