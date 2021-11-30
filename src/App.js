import React from "react";
import ReactDOM from "react-dom";
import BrandBanner from "./components/BrandBanner.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Article from "./components/Article.js";
import CarouselSidebar from "./components/CarouselSidebar.js";
import CardYes from "./components/Card.js";
import CardYes2 from "./components/Card2.js";
// import "./App.css";
import Box from "@mui/material/Box";
import ArticleSecond from "./components/Article2.js";
import ArticleThird from "./components/Article3.js";
import SideForm from "./components/SideForm.js";
import HeaderRevised from "./components/HeaderRevised.js";

function App() {
  return (
    <>
      <BrandBanner />
      <HeaderRevised />
      <CarouselSidebar />
      <Box sx={{ mt: 5 }}></Box>
      <CardYes />
      <CardYes2 />
      <Box sx={{ mt: 15 }}></Box>

      <Article />
      <Box sx={{ mt: 5 }}></Box>
      <ArticleSecond />
      <Box sx={{ mt: 5 }}></Box>
      <ArticleThird />
      <Box sx={{ mt: 25 }}></Box>
      <Footer />
    </>
  );
}

export default App;
