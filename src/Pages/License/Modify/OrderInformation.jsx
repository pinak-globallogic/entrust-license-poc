import CustomerDetails from "../Generate/CustomerDetails";
import OrderNumberComponent from "../SharedComponents/OrderNumber";

const OrderInformation = () => {
  return (
    <>
      <CustomerDetails />
      <OrderNumberComponent title="Order Number" />
    </>
  );
};

export default OrderInformation;
