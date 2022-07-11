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
} from "Redux/Slices/customCardSlice";
import { updateFeatureCardState } from "Redux/Slices/customCardSlice";
import { updateLimitationsCardState } from "Redux/Slices/customCardSlice";
import { updateProductInformationCardState } from "Redux/Slices/customCardSlice";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const CustomCardHeader = ({ title, ...props }) => {
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
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.customCard.activePage);

  const expandCollapseCard = (cardTitle) => {
    if (cardTitle === "Customer") {
      dispatch(
        updateCustomerCardState({
          ...customerCardExpanded,
          expanded: !customerCardExpanded.expanded,
        })
      );
    }
    if (cardTitle === "Feature") {
      dispatch(
        updateFeatureCardState({
          ...featureCardExpanded,
          expanded: !featureCardExpanded.expanded,
        })
      );
    }
    if (cardTitle === "Limitation") {
      dispatch(
        updateLimitationsCardState({
          ...limitationCardExpanded,
          expanded: !limitationCardExpanded.expanded,
        })
      );
    }
    if (cardTitle === "ProductInformation") {
      dispatch(
        updateProductInformationCardState({
          ...productInformationCardExpanded,
          expanded: !productInformationCardExpanded.expanded,
        })
      );
    }
  };

  const navigateToPage = (cardTitle) => {
    if (cardTitle === "Customer") {
      dispatch(
        updateActivePage({
          ...activePage,
          number: 0,
        })
      );
    }
    if (cardTitle === "ProductInformation") {
      dispatch(
        updateActivePage({
          ...activePage,
          number: 1,
        })
      );
    }
    if (cardTitle === "Feature") {
      dispatch(
        updateActivePage({
          ...activePage,
          number: 2,
        })
      );
    }
    if (cardTitle === "Limitation") {
      dispatch(
        updateActivePage({
          ...activePage,
          number: 3,
        })
      );
    }
  };

  return (
    <Box>
      <Grid item container xs alignItems="center" {...props} mb={0.5}>
        <Grid item xs>
          {title === "Customer" && (
            <IconButton
              onClick={() => expandCollapseCard("Customer")}
              aria-label="expand"
              size="small"
            >
              {customerCardExpanded.expanded ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUpIcon />
              )}
            </IconButton>
          )}
          {title === "Features" && (
            <IconButton
              onClick={() => expandCollapseCard("Feature")}
              aria-label="expand"
              size="small"
            >
              {featureCardExpanded.expanded ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUpIcon />
              )}
            </IconButton>
          )}
          {title === "Limitations" && (
            <IconButton
              onClick={() => expandCollapseCard("Limitation")}
              aria-label="expand"
              size="small"
            >
              {limitationCardExpanded.expanded ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUpIcon />
              )}
            </IconButton>
          )}
          {title === "Order Information" && (
            <IconButton
              onClick={() => expandCollapseCard("ProductInformation")}
              aria-label="expand"
              size="small"
            >
              {productInformationCardExpanded.expanded ? (
                <ArrowDropDown />
              ) : (
                <ArrowDropUpIcon />
              )}
            </IconButton>
          )}
          <Typography variant="caption">{title}</Typography>
        </Grid>
        <Grid item xs display="flex" justifyContent="end">
          {title === "Customer" && (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{ minWidth: "2rem" }}
              onClick={() => navigateToPage("Customer")}
            >
              <EditIcon sx={{ fontSize: "1rem" }} />
            </Button>
          )}
          {title === "Features" && (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{ minWidth: "2rem" }}
              onClick={() => navigateToPage("Feature")}
            >
              <EditIcon sx={{ fontSize: "1rem" }} />
            </Button>
          )}
          {title === "Limitations" && (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{ minWidth: "2rem" }}
              onClick={() => navigateToPage("Limitation")}
            >
              <EditIcon sx={{ fontSize: "1rem" }} />
            </Button>
          )}
          {title === "Order Information" && (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{ minWidth: "2rem" }}
              onClick={() => navigateToPage("ProductInformation")}
            >
              <EditIcon sx={{ fontSize: "1rem" }} />
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomCardHeader;
