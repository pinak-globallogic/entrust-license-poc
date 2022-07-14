import CustomerDetails from "../Generate/CustomerDetails"
import OrderNumberComponent from "../Shared Components/OrderNumberComponent"

const OrderInformation = () => {
  return (
    <div>
      <CustomerDetails />
      <OrderNumberComponent title="Order Number"/>
    </div>
  )
}

export default OrderInformation
