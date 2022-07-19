import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyIcon from "@mui/icons-material/Key";

const useStyles = makeStyles({
  content: { minHeight: 210 },
  disableCard: { opacity: 0.5, pointerEvents: "none" },
});

const CardWrapper = ({ data, onSubmitButton, ...props }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4} className={!data.enable ? classes.disableCard : {}}>
      <Box {...props}>
        <Card variant="outlined">
          <CardContent
            className={classes.content}
            id={"cardContent-" + data.key}
          >
            <Grid xs={12} container>
              <Grid xs={2}>
                <IconButton aria-label="previous" id={"titleIcon-" + data.key}>
                  {data.icon === "key" ? <KeyIcon /> : <SearchIcon />}
                </IconButton>
              </Grid>
              <Grid xs={10}>
                <Grid container xs={12}>
                  <Grid xs={12}>
                    <Typography
                      variant="h6"
                      component="div"
                      lineHeight={1.4}
                      id={"title-" + data.key}
                    >
                      {data.title}
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      id={"secondaryTitle-" + data.key}
                    >
                      {data.subtitle}
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      id={"secondary2Title-" + data.key}
                    >
                      {data.subtitle2}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              sx={{ mb: 3, mt: 3 }}
              id={"contentTitle-" + data.key}
            >
              {data.content.title}
            </Typography>
            <Typography variant="body2" id={"contentSubTitle-" + data.key}>
              {data.content.subtitle}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={onSubmitButton}>
              <Typography
                variant="button"
                fontWeight={600}
                fontSize="small"
                color={data.enable ? "" : "gray"}
                id={"actionOfCard-" + data.key}
              >
                {data.action.buttonText}
              </Typography>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default CardWrapper;
