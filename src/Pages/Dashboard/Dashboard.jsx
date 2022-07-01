import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardWrapper from "./CardWrapper";
import { useNavigate } from "react-router-dom";
import { CustomCard } from "./../License/Generate/GenerateLicense";
import { LICENSE_SEARCH_PAGE_ROUTE } from "Routes";

const cards = [
  {
    key: 1,
    title: "Generate product key Mockup 2: Wizard",
    subtitle: "Order Entry",
    content: {
      title: "Order fulfillment from a line item.",
      subtitle:
        "You can create multiple keys using the same settings here, as well.",
    },
    action: {
      buttonText: "GENERATE NEW PRODUCT KEY",
    },
  },
  {
    key: 2,
    title: "License Database Search Mockup 3: Data Layout Rework",
    subtitle: "",
    content: {
      title: "Order fulfillment from a line item.",
      subtitle:
        "You can create multiple keys using the same settings here, as well.",
    },
    action: {
      buttonText: "EXPLORE THE DATABASE",
    },
  },
];

const Dashboard = (props) => {
  const navigate = useNavigate();

  const onGenerateProductKeyClick = () => {
    navigate("/license/generate");
  };

  const onSearchProductKey = () => {
    navigate(LICENSE_SEARCH_PAGE_ROUTE);
  };

  return (
    <Grid item container direction="column" pb={10} {...props}>
      <CustomCard>
        <Grid item mb={2}>
          <Typography variant="h4">Dashboard</Typography>
        </Grid>
        <Grid item mb={6}>
          <Typography variant="caption">
            Welcome to the Internal Licensing Tool. This is your Dashboard, from
            where you can access all available functions. Below the header of
            each card, the legacy name of the function in regard to the old
            toolset is mentioned.
          </Typography>
        </Grid>
        <Grid item>
          {cards.map((card) => (
            <CardWrapper
              key={card.key}
              mb={5}
              onSubmitButton={
                card.key === 2 ? onSearchProductKey : onGenerateProductKeyClick
              }
              data={card}
            />
          ))}
        </Grid>
      </CustomCard>
    </Grid>
  );
};

export default Dashboard;
