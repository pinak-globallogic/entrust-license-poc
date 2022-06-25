import Content from "./../../Layouts/Content/index";
import EnhancedTable from "./../../Components/EnhancedTable";
import { useEffect, useState } from "react";
import axios from "axios";

const headCells = [
  {
    id: "productKey",
    numeric: false,
    disablePadding: true,
    label: "Product Key",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "feature",
    numeric: false,
    disablePadding: false,
    label: "Feature",
  },
  {
    id: "limit",
    numeric: false,
    disablePadding: false,
    label: "Limit",
  },
  {
    id: "activation",
    numeric: false,
    disablePadding: false,
    label: "Activation",
  },
  {
    id: "expiration",
    numeric: false,
    disablePadding: false,
    label: "Expiration",
  },
];

const License = () => {
  const [licData, setLicData] = useState([]);

  const getLicenseData = async () => {
    const licenseData = await axios.get(
      "https://mocki.io/v1/a7fd7ff2-b5b0-4bb6-9295-aa83ab4fb9d2"
    );
    setLicData(licenseData.data);
  };

  useEffect(() => {
    getLicenseData();
  }, []);

  return (
    <>
      <Content>
        <EnhancedTable headCells={headCells} data={licData} />
      </Content>

    </>
  );
};

export default License;
