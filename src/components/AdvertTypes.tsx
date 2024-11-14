import { Box, Card, CardContent, Grid, Grid2, Typography } from "@mui/material";
import React from "react";
import { cardData } from "../cardData";
import { CustomCard } from "./CustomCard";
export const AdvertTypes = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "800px",
        backgroundImage: 'url("./advert-bg.webp")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        marginTop: "10px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          marginTop: "20px",
          fontSize: "30px",
          fontWeight: 600,
          letterSpacing: "2px",
          color: "#4E4D70",
        }}
      >
        REKLAM XİDMƏTLƏRİMİZ
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          justifyContent: "center", // Центрирует элементы по горизонтали
          marginTop: "20px",
        }}
      >
        {cardData.map((cardItem, index) => (
          <Grid item key={index}>
            <CustomCard
              imageUrl={cardItem.imageUrl}
              title={cardItem.title}
              text={cardItem.text}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
