import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CustomCard, CustomCardContent } from "Utilty";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const GenerateProductKeyDetails = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {
      setCopySuccess("Failed to copy!");
      {
        copySuccess;
      }
    }
  };

  const data = [
    {
      id: "01.",
      key: "1234-1234-1234",
    },
    {
      id: "02.",
      key: "2222-3333-4444",
    },
    {
      id: "03.",
      key: "4444-5555-6666",
    },
  ];

  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item container direction="column" xs pt={2}>
            <Grid item container>
              <Grid item mb={1} marginRight="10px">
                <CheckCircleIcon color="primary" fontSize="large" />
              </Grid>
              <Grid item mb={3}>
                <Typography variant="h5">Key successfully created.</Typography>
              </Grid>
            </Grid>
            <Grid item mb={4}>
              <Typography variant="caption">
                You can copy the individual key by clicking on the copy
                indicator on the right.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid>
            <table bgcolor="white" cellSpacing="35">
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.key}</td>
                    <td>
                      <ContentCopyIcon
                        onClick={() => copyToClipBoard(item.key)}
                      ></ContentCopyIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default GenerateProductKeyDetails;
