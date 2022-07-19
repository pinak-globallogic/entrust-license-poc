import Content from "layouts/main/Content";
import SearchLicenseDetails from "./details/SearchLicenseDetails";
import SearchLicense from "./SearchLicense";

const SearchLicenseWrapper = () => {
  return (
    <Content sx={{ overflow: "hidden" }}>
      <SearchLicense />
      <SearchLicenseDetails />
    </Content>
  );
};

export default SearchLicenseWrapper;
