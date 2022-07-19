import CustomerDetails from "../../generate/steps/CustomerDetails";
import OrderNumber from "../../shared-components/OrderNumber";

const OrderInformationStep = () => {
  return (
    <>
      <CustomerDetails />
      <OrderNumber title="Order Number" />
    </>
  );
};

export default OrderInformationStep;
