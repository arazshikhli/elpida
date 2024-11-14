import React from "react";

import "./App.css";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "./Pages/HomePage";
import { EmailPage } from "./Pages/EmailPage";
import { AboutPage } from "./Pages/AboutPage";
import { GalleryPage } from "./Pages/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
