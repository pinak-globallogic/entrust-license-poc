import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useContext } from "react";
import { AppContext } from "./../../../App";
import { CustomCard, CustomCardContent } from "./GenerateLicense";

const customerNameList = [
  { name: "Datacard LLC" },
  { name: "Entrust Datacard Inc." },
  { name: "Datacard Germany GmbH" },
];

const filter = createFilterOptions();

var newCustomerAddedMsg;

const addNewCustomer = (customerName) => {
  if (customerName) {
    newCustomerAddedMsg = (
      <Typography variant="caption">
        You have chosen a new customer that is not yet in database.
        <br /> {customerName} will be added.
      </Typography>
    );
    //ToDo : how to store new customer names, just add in option on this screen
    // and add in db only on submit of entire form. For Now, adding in options only.
  } else newCustomerAddedMsg = null;
};

const CustomerDetails = () => {
  const { state, setState } = useContext(AppContext);
  const [value, setValue] = React.useState(state.customer.name);
  const [inputValue, setInputValue] = React.useState("");
  const options = customerNameList;

  const onChange = (event, value) => {
    if (value) {
      setValue(value.name);
      if (value.inputValue) {
        addNewCustomer(value.name);
        options.push({ name: value.name });
      } else {
        addNewCustomer(null);
      }

      setState({
        ...state,
        customer: {
          name: value.name,
        },
      });
    }
  };

  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Select or create customer</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              To generate a license key, you need to set the customer. When
              typing below, you can search the database for existing customers.
              If the customer is not yet in the database, you can type in the
              new name, as well.
            </Typography>
          </Grid>
          <Grid item>
            <Autocomplete
              freeSolo
              value={value}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              onChange={onChange}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== "") {
                  filtered.push({
                    name: params.inputValue,
                    inputValue: `Add "${params.inputValue}"`,
                  });
                }

                return filtered;
              }}
              options={options}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.name;
              }}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Customer name"
                  variant="outlined"
                  size="small"
                  required
                  value={inputValue}
                />
              )}
            />
          </Grid>
          <br />
          <Grid item mb={2}>
            {newCustomerAddedMsg}
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default CustomerDetails;
