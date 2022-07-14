import CustomerDetails from "../../Generate/CustomerDetails";
import OrderNumber from "../../SharedComponents/OrderNumber";

const OrderInformationStep = () => {
  return (
    <>
      <CustomerDetails />
      <OrderNumber title="Order Number" />
    </>
  );
};

export default OrderInformationStep;
