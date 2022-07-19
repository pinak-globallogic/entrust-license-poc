import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/styles";

const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "0.5vh 1.5vh 1vh !important",
}));

export default CustomCardContent;
