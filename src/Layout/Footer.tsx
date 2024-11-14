import { Box, Typography, Link } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333", // Цвет фона футера
        color: "#fff", // Цвет текста
        padding: "20px",
        textAlign: "center",
        marginTop: "auto", // Для фиксации футера внизу страницы
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} Elpida Advertising
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Link href="#" color="inherit" underline="hover">
          <InstagramIcon
            sx={{
              width: "100px",
              transition: "all 0.7s",
              "&:hover": {
                fill: "red",
              },
            }}
          />
        </Link>
        <Link href="#" color="inherit" underline="hover">
          <FacebookIcon
            sx={{
              width: "100px",
              transition: "all 0.7s",
              "&:hover": {
                fill: "blue",
              },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};
