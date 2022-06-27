import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";

const CustomBox = styled(Box)(() => ({
  maxWidth: "300px",
}));

const CardWrapper = ({ data, onSubmitButton, ...props }) => {
  return (
    <CustomBox sx={{}} {...props}>
      <Card variant="outlined">
        <CardContent sx={{ mb: 3 }}>
          <Typography variant="h6" component="div" lineHeight={1.4}>
            {data.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {data.subtitle}
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, mt: 3 }}>
            {data.content.title}
          </Typography>
          <Typography variant="body2">{data.content.subtitle}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Typography
              variant="button"
              fontWeight={600}
              fontSize="small"
              onClick={onSubmitButton}
            >
              {data.action.buttonText}
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </CustomBox>
  );
};

export default CardWrapper;
