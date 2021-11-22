import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Article1 from "./assets/article1.png";
import Article2 from "./assets/article2.png";
import "./Article.css";

function ArticleThird() {
	return (
		<Box sx={{ mr: 20, ml: 20 }}>
			<Grid container>
				<Grid item xs={6} sx={{ backgroundColor: "#FFFFFF" }}>
					<Grid container>
						<Grid item xs={3} className="grid">
							<img
								alt=""
								src={Article1}
								className="articleimage"
							/>
						</Grid>
						<Box sx={{ mr: 2 }}></Box>
						<Grid
							item
							xs={8.5}
							sx={{ backgroundColor: "#FFFFFF" }}
							className="grid"
						>
							<h6 className="title">
								АКУМУЛЯТОРНА WI-FI КАМЕРА REOLINK ARGUS 3
							</h6>
							<p className="description">
								Він охороняє весь день, ніколи не спить, ніколи
								не відволікається. З ним ти завжди у безпеці,
								все це про Reolink Argus 3. І ми розповімо про
								всю вижимку з характеристик та функціоналу цього
								монстру.
							</p>
							<p className="date">07.12.21</p>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6} sx={{ backgroundColor: "#FFFFFF" }}>
					<Grid container>
						<Grid item xs={3} className="grid">
							<img
								alt=""
								src={Article1}
								className="articleimage"
							/>
						</Grid>
						<Box sx={{ mr: 2 }}></Box>
						<Grid
							item
							xs={8.5}
							sx={{ backgroundColor: "#FFFFFF" }}
							className="grid"
						>
							<h6 className="title">
								АКУМУЛЯТОРНА WI-FI КАМЕРА REOLINK ARGUS 3
							</h6>
							<p className="description">
								Він охороняє весь день, ніколи не спить, ніколи
								не відволікається. З ним ти завжди у безпеці,
								все це про Reolink Argus 3. І ми розповімо про
								всю вижимку з характеристик та функціоналу цього
								монстру.
							</p>
							<p className="date">07.12.21</p>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

export default ArticleThird;
