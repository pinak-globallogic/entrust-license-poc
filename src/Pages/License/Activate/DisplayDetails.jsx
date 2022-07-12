import { useSelector } from "react-redux";

import CustomerInfo from "./CustomerInfo";
import DetailKeyInfo from "./DetailKeyInfo";

const DisplayDetails = () => {
  const activePage = useSelector((state) => state.activateKey.activePage);
  const count = activePage.number;

  return (
    <>
      {count >= 2 && (
        <>
          <CustomerInfo />
          <DetailKeyInfo />
        </>
      )}
    </>
  );
};

export default DisplayDetails;
