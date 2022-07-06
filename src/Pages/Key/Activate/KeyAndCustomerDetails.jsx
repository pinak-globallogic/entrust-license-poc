import CustomerInfo from "./CustomerInfo";
import Content from "Layouts/Content/Content";
import DetailKeyInfo from "./DetailKeyInfo";
import Grid from "@mui/material/Grid";


const KeyAndCustomerDetails = () => {
  return (
    <Grid item xs={5}>
      <Content pt={5}>
        <CustomerInfo />
        <DetailKeyInfo />
      </Content>
    </Grid>
  );
};

export default KeyAndCustomerDetails;
