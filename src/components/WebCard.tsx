import { Card, Typography, Box, CardContent } from "@mui/material";
import React, { FC } from "react";
import { IwebServiceProp } from "../types/types";
export const WebCard: FC<IwebServiceProp> = ({ title, text, imageUrl }) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: "400px", // Adjust the height as needed
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        "&:hover .hoverText": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}
    >
      <CardContent
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          transform: "translateY(10px)",
        }}
        className="hoverText"
      >
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontSize: {
              xs: "16px",
              lg: "20px",
              xl: "22px",
            },
          }}
        >
          {text}
        </Typography>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          color: "#C92C3A",
          fontWeight: "bold",
          fontSize: {
            xs: "20px",
            lg: "24px",
            xl: "30px",
          },
        }}
      >
        {title}
      </Box>
    </Card>
  );
};
