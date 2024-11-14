import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
export const Layout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <Header />
        <Box
          sx={{
            marginTop: "64px",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
