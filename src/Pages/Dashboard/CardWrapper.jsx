import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";
import { Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyIcon from "@mui/icons-material/Key";

const CustomBox = styled(Box)(() => ({
  maxWidth: "300px",
}));

const CardWrapper = ({ data, onSubmitButton, ...props }) => {
  return (
    <Grid
      item
      xs={4}
      sx={!data.enable ? { opacity: 0.5, pointerEvents: "none" } : {}}
    >
      <CustomBox sx={{}} {...props}>
        <Card sx={{ height: 300 }} variant="outlined">
          <CardContent sx={{ mb: 3, height: 200 }}>
            <Grid xs={12} container>
              <Grid xs={2}>
                <IconButton aria-label="previous">
                  {data.icon === "key" ? <KeyIcon /> : <SearchIcon />}
                </IconButton>
              </Grid>
              <Grid xs={10}>
                <Grid container xs={12}>
                  <Grid xs={12}>
                    <Typography variant="h6" component="div" lineHeight={1.4}>
                      {data.title}
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography variant="caption" color="text.secondary">
                      {data.subtitle}
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography variant="caption" color="text.secondary">
                      {data.subtitle2}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{ mb: 3, mt: 3 }}>
              {data.content.title}
            </Typography>
            <Typography variant="body2">{data.content.subtitle}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={onSubmitButton}>
              <Typography variant="button" fontWeight={600} fontSize="small" color={data.enable ? "" : "gray"}>
                {data.action.buttonText}
              </Typography>
            </Button>
          </CardActions>
        </Card>
      </CustomBox>
    </Grid>
  );
};

export default CardWrapper;
