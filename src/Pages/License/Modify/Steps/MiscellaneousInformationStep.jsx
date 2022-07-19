import CustomerInfo from "../../activate/steps/CustomerInfo";
import OptionalDetails from "../../shared-components/OptionalDetails";

const MiscellaneousInformationStep = () => {
  return (
    <>
      <OptionalDetails />
      <CustomerInfo details={{ color: "", isSideCard: false }} />
    </>
  );
};

export default MiscellaneousInformationStep;
