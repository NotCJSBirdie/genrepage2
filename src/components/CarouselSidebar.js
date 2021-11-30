import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./CarouselSidebar.css";
import CarouselBackground from "./assets/carouselbg.png";
import CarouselSolo from "./Carousel.js";
import SideBar from "./Sidebar.js";
import MediaQuery from "react-responsive";
import Stack from "@mui/material/Stack";

function CarouselSidebar() {
	return (
		<div className="carouselsidebar">
			<MediaQuery minWidth={1314}>
				<Grid container spacing={0} className="grid">
					<Grid item xs={4} sx={{ ml: 3 }}>
						<SideBar />
					</Grid>
					<Grid item xs={7.78} sx={{ backgroundColor: "#041a3e" }}>
						<CarouselSolo />
					</Grid>
				</Grid>
			</MediaQuery>
			<MediaQuery maxWidth={1313}>
				<Stack>
					<SideBar />
					<CarouselSolo />
				</Stack>
			</MediaQuery>
		</div>
	);
}

export default CarouselSidebar;
