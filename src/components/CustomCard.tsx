import { Box, Card, Typography } from "@mui/material";
import React, { FC } from "react";
interface ICardProps {
  imageUrl: string;
  title: string;
  text: string;
}
export const CustomCard: FC<ICardProps> = ({ imageUrl, title, text }) => {
  return (
    <Card
      sx={{
        width: "400px",
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        minHeight: "400px",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative", // для позиционирования текста
        padding: "5px",
        "&hover": {
          justifyContent: "center",
        },
        "&:hover .title": {
          // скрываем title при наведении
          opacity: 0,
        },
        "&:hover .hoverText": {
          // показываем текст при наведении
          opacity: 1,
        },
      }}
    >
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className="title"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          letterSpacing: "2px",
          transition: "opacity 0.3s ease-in-out",
          color: "#4E569A",
          fontSize: "24px",
        }}
      >
        {title}
      </Typography>

      {/* Блок с текстом, который отображается по центру при наведении */}
      <Box
        className="hoverText"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(201, 201, 201, 0.8)",
          color: "black",
          padding: "10px",
          textAlign: "center",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Typography sx={{ color: "#000080", fontSize: "20px" }}>
          {text}
        </Typography>
      </Box>
    </Card>
  );
};
