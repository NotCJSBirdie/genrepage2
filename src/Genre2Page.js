import React from "react";
import ReactDOM from "react-dom";
import BrandBanner from "./components/BrandBanner.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Article from "./components/Article.js";
import CarouselSidebar from "./components/CarouselSidebar.js";
import CardYes from "./components/Card.js";
import CardYes2 from "./components/Card2.js";
import "./App.css";
import Box from "@mui/material/Box";
import ArticleSecond from "./components/Article2.js";
import ArticleThird from "./components/Article3.js";
import SideFormAndCard from "./components/SideFormAndCard.js";
import HeaderRevised from "./components/HeaderRevised.js";

function Genre2() {
	return (
		<div className="body">
			<BrandBanner />
			<HeaderRevised />
			<Box sx={{ mb: 10 }}></Box>
			<h3 className="mainheading">ВИДЕОДОМОФОНЫ</h3>
			<Box sx={{ mb: 10 }}></Box>
			<SideFormAndCard />
			<Box sx={{ mb: 10 }}></Box>
			<Footer />
		</div>
	);
}

export default Genre2;
