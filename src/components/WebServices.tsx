import { Box, Typography } from "@mui/material";
import React from "react";
import { WebCard } from "./WebCard";
import { webServiceData } from "../cardData";
import { IwebServiceProp } from "../types/types";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {}),
}));
export const WebServices = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: 'url("./web/bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
          color: "#4E4D70",
          fontWeight: "600",
          letterSpacing: "3px",
        }}
      >
        WEB XİDMƏTLƏR
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Grid
          justifyContent={"center"}
          alignItems={"center"}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {webServiceData &&
            webServiceData.map((webItem: IwebServiceProp) => {
              return (
                <Grid item xs={6}>
                  <WebCard
                    key={webItem.title}
                    title={webItem.title}
                    text={webItem.text}
                    imageUrl={webItem.imageUrl}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};
