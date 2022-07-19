import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  updateActivePage,
  updateCustomerCardState,
  updateLicenseServerCardState,
  updateMiscellaneousCardState,
} from "redux/slices/customCardSlice";
import { updateFeatureCardState } from "redux/slices/customCardSlice";
import { updateLimitationsCardState } from "redux/slices/customCardSlice";
import { updateProductInformationCardState } from "redux/slices/customCardSlice";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const CustomCardHeader = (details, ...props) => {
  const customerCardExpanded = useSelector(
    (state) => state.customCard.customerCard
  );
  const featureCardExpanded = useSelector(
    (state) => state.customCard.featureCard
  );
  const limitationCardExpanded = useSelector(
    (state) => state.customCard.limitationCard
  );
  const productInformationCardExpanded = useSelector(
    (state) => state.customCard.productInformationCard
  );
  const licenseServerCardExpanded = useSelector(
    (state) => state.customCard.licenseServerCard
  );
  const miscellaneousCardExpanded = useSelector(
    (state) => state.customCard.miscellaneousCard
  );

  const modifyLicense = useSelector((state) => state.modifyKey.modifyLicense);
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.customCard.activePage);

  const expandCollapseCard = (id) => {
    if (id === 0) {
      dispatch(
        updateCustomerCardState({
          ...customerCardExpanded,
          expanded: !customerCardExpanded.expanded,
        })
      );
    }
    if (id === 1) {
      dispatch(
        updateProductInformationCardState({
          ...productInformationCardExpanded,
          expanded: !productInformationCardExpanded.expanded,
        })
      );
    }
    if (id === 2) {
      dispatch(
        updateFeatureCardState({
          ...featureCardExpanded,
          expanded: !featureCardExpanded.expanded,
        })
      );
    }
    if (id === 3) {
      dispatch(
        updateLimitationsCardState({
          ...limitationCardExpanded,
          expanded: !limitationCardExpanded.expanded,
        })
      );
    }
    if (id === 4) {
      dispatch(
        updateLicenseServerCardState({
          ...licenseServerCardExpanded,
          expanded: !licenseServerCardExpanded.expanded,
        })
      );
    }
    if (id === 5) {
      dispatch(
        updateMiscellaneousCardState({
          ...miscellaneousCardExpanded,
          expanded: !miscellaneousCardExpanded.expanded,
        })
      );
    }
  };

  const navigateToPage = (cardTitle, id) => {
    if (cardTitle === "Customer") {
      dispatch(
        updateActivePage({
          ...activePage,
          number: 0,
        })
      );
      // expand card if it is in collapsed state when clicked on edit button
      if (!customerCardExpanded.expanded) {
        expandCollapseCard(id);
      }
    }
    if (cardTitle === "Order Information") {
      // expand card if it is in collapsed state when clicked on edit button
      if (!productInformationCardExpanded.expanded) {
        expandCollapseCard(id);
      }

      // set screen for modify license page
      if (modifyLicense) {
        dispatch(
          updateActivePage({
            ...activePage,
            modifyLicenseWizard: 5,
          })
        );
      } else {
        dispatch(
          updateActivePage({
            ...activePage,
            number: 1,
          })
        );
      }
    }
    if (cardTitle === "Features") {
      // expand card if it is in collapsed state when clicked on edit button
      if (!featureCardExpanded.expanded) {
        expandCollapseCard(id);
      }
      // set screen for modify license page
      if (modifyLicense) {
        dispatch(
          updateActivePage({
            ...activePage,
            modifyLicenseWizard: 6,
          })
        );
      } else {
        dispatch(
          updateActivePage({
            ...activePage,
            number: 2,
          })
        );
      }
    }
    if (cardTitle === "Limitations") {
      // expand card if it is in collapsed state when clicked on edit button
      if (!limitationCardExpanded.expanded) {
        expandCollapseCard(id);
      }

      // set screen for modify license page
      if (modifyLicense) {
        dispatch(
          updateActivePage({
            ...activePage,
            modifyLicenseWizard: 7,
          })
        );
      } else {
        dispatch(
          updateActivePage({
            ...activePage,
            number: 3,
          })
        );
      }
    }
    if (cardTitle === "License Server") {
      dispatch(
        updateActivePage({
          ...activePage,
          modifyLicenseWizard: 2,
        })
      );
    }

    if (cardTitle === "Miscellaneous") {
      dispatch(
        updateActivePage({
          ...activePage,
          modifyLicenseWizard: 8,
        })
      );
    }
  };

  return (
    <Box>
      <Grid item container xs alignItems="center" {...props} mb={0.5}>
        <Grid item xs>
          <IconButton
            onClick={() => expandCollapseCard(details.title.id)}
            aria-label="expand"
            size="small"
          >
            {details.title.expanded ? <ArrowDropDown /> : <ArrowDropUpIcon />}
          </IconButton>
          <Typography variant="caption">{details.title.name}</Typography>
        </Grid>
        <Grid item xs display="flex" justifyContent="end">
          <Button
            variant="contained"
            size="small"
            color="secondary"
            sx={{ minWidth: "2rem" }}
            onClick={() => navigateToPage(details.title.name, details.title.id)}
          >
            <EditIcon sx={{ fontSize: "1rem" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomCardHeader;
