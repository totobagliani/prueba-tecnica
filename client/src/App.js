import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ArchivedPostPage from "./pages/ArchivedPostPage";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/archived" element={<ArchivedPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
