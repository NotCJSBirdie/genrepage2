import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./CarouselSidebar.css";
import CarouselBackground from "./assets/carouselbg.png";
import CarouselSolo from "./Carousel.js";
import SideBar from "./Sidebar.js";

function CarouselSidebar() {
	function onChange(a, b, c) {
		console.log(a, b, c);
	}
	const contentStyle = {
		height: "160px",
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",

		margin: "0",
	};
	return (
		<div className="carouselsidebar">
			<Grid container spacing={0} className="grid">
				<Grid item xs={4} sx={{ ml: 3 }}>
					<SideBar />
				</Grid>
				<Grid item xs={7.78} sx={{ backgroundColor: "#041a3e" }}>
					<CarouselSolo />
				</Grid>
			</Grid>
		</div>
	);
}

export default CarouselSidebar;
