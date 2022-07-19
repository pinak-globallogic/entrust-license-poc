import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useSelector, useDispatch } from "react-redux";

import { CustomCard, CustomCardContent } from "utilty";
import { updateCustomer } from "redux/slices/generateLicenseSlice";
import { useState } from "react";

//ToDo: Hard coded data should be removed once API are available
const customerNameList = [
  { name: "Datacard LLC" },
  { name: "Entrust Datacard Inc." },
  { name: "Datacard Germany GmbH" },
];

const filter = createFilterOptions();

const CustomerDetails = () => {
  const customer = useSelector((state) => state.generateLicense.customer);
  const dispatch = useDispatch();
  const [value, setValue] = useState(customer.name);
  const [inputValue, setInputValue] = useState("");
  const options = customerNameList;
  const [isNewCustomer, setNewCustomer] = useState(false);

  const onChange = (event, value) => {
    if (value) {
      setValue(value.name);
      if (value.inputValue) {
        setNewCustomer(true);
        options.push({ name: value.name });
        //ToDo: Store new customer names when form is submitted, when API are available.
      } else {
        setNewCustomer(false);
      }

      dispatch(updateCustomer({ ...customer, name: value.name }));
    }
  };

  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography id="customer-title" variant="h6">
              Select or create customer
            </Typography>
          </Grid>
          <Grid item mb={3}>
            <Typography id="customer-subtitle" variant="caption">
              When typing below, you can search the database for existing
              customers.
            </Typography>
          </Grid>
          <Grid item>
            <Autocomplete
              id="customer-name-autocomplete"
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
                  id="customer-name-field"
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
            {isNewCustomer && (
              <Typography id="new-customer-msg" variant="caption">
                You have chosen a new customer that is not yet in database.
                <br /> <q>{value}</q> will be added.
              </Typography>
            )}
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default CustomerDetails;
