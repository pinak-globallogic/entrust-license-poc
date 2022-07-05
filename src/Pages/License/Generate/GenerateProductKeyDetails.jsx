import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CustomCard, CustomCardContent } from "./GenerateLicense";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

const GeneratrProductKeyDetails = () => {
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
      id: "01",
      key: "1234-1234-1234",
    },
    {
      id: "02",
      key: "2222-3333-4444",
    },
  ];

  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography id = "productKey" variant="h3">Geneate Product Key</Typography>
          </Grid>

          <Grid item mb={4}>
            <Typography variant="h6">
              <CheckIcon />
              Key successfully created.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption">
              You can copy the individual key by clicking on the copy indicator
              on the right.
            </Typography>
          </Grid>
          <br />
          <br />
          <Grid>
            <table>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td></td>
                    <td></td>
                    <td>{item.key}</td>
                    <td></td>
                    <td></td>
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

export default GeneratrProductKeyDetails;
