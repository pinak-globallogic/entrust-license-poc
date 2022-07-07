import Content from "Layouts/Content/Content";
import SearchLicense from "./SearchLicense";
import SearchLicenseDetails from "./Details/SearchLicenseDetails";

const SearchLicenseWrapper = () => {
  return (
    <Content pt={5}>
      <SearchLicense />
      <SearchLicenseDetails />
    </Content>
  );
};

export default SearchLicenseWrapper;
