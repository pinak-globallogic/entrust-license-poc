import CustomerInfo from "../../Activate/CustomerInfo";
import OptionalDetails from "../../SharedComponents/OptionalDetails";

const MiscellaneousInformationStep = () => {
  return (
    <>
      <OptionalDetails />
      <CustomerInfo details={{ color: "", isSideCard: false }} />
    </>
  );
};

export default MiscellaneousInformationStep;
