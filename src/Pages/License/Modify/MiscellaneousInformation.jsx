import CustomerInfo from "../Activate/CustomerInfo"
import OptionalDetailsComponent from "../Shared Components/OptionalDetailsComponent"

const MiscellaneousInformation = () => {
  return (
    <div>
       
        <OptionalDetailsComponent />
        <CustomerInfo  details = {{color: "",  isSideCard: false}}/>
      
    </div>
  )
}

export default MiscellaneousInformation
