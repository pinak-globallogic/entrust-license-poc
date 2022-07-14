import CustomerInfo from "../Activate/CustomerInfo";
import OptionalDetailsComponent from "../SharedComponents/OptionalDetails";

const MiscellaneousInformation = () => {
  return (
    <>
      <OptionalDetailsComponent />
      <CustomerInfo details={{ color: "", isSideCard: false }} />
    </>
  );
};

export default MiscellaneousInformation;
