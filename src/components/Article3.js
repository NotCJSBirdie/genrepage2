import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Article1 from "./assets/article1.png";
import Article2 from "./assets/article2.png";
import Article3 from "./assets/article3.png";
import Article4 from "./assets/article4.png";
import Article5 from "./assets/article5.png";
import Article6 from "./assets/article6.png";
import "./Article.css";
import MediaQuery from "react-responsive";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ArticleThird() {
	return (
		<>
			<MediaQuery maxWidth={607}>
				<Box sx={{ mr: 5, ml: 5 }}>
					<Box sx={{ mb: 10 }}></Box>

					<Stack>
						<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
							<CardContent>
								<img
									alt=""
									src={Article5}
									className="articleimagesmallx"
								/>
								<h6 className="title">
									АКУМУЛЯТОРНА WI-FI КАМЕРА REOLINK ARGUS 3
								</h6>
								<p className="description">
									Він охороняє весь день, ніколи не спить,
									ніколи не відволікається. З ним ти завжди у
									безпеці, все це про Reolink Argus 3. І ми
									розповімо про всю вижимку з характеристик та
									функціоналу цього монстру.
								</p>
								<p className="date">07.12.21</p>
							</CardContent>
						</Card>
						<Box sx={{ mb: 7 }}></Box>
						<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
							<CardContent>
								<img
									alt=""
									src={Article6}
									className="articleimagesmallx"
								/>
								<h6 className="title">
									АКУМУЛЯТОРНА WI-FI КАМЕРА REOLINK ARGUS 3
								</h6>
								<p className="description">
									Він охороняє весь день, ніколи не спить,
									ніколи не відволікається. З ним ти завжди у
									безпеці, все це про Reolink Argus 3. І ми
									розповімо про всю вижимку з характеристик та
									функціоналу цього монстру.
								</p>
								<p className="date">07.12.21</p>
							</CardContent>
						</Card>
					</Stack>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={608} maxWidth={919}>
				<Box sx={{ mr: 5, ml: 5 }}>
					<Box sx={{ mb: 10 }}></Box>

					<Stack>
						<Grid container>
							<Grid item xs={3} className="grid">
								<img
									alt=""
									src={Article5}
									className="articleimagesmall"
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
									Він охороняє весь день, ніколи не спить,
									ніколи не відволікається. З ним ти завжди у
									безпеці, все це про Reolink Argus 3. І ми
									розповімо про всю вижимку з характеристик та
									функціоналу цього монстру.
								</p>
								<p className="date">07.12.21</p>
							</Grid>
						</Grid>
						<Box sx={{ mb: 7 }}></Box>

						<Grid container>
							<Grid item xs={3} className="grid">
								<img
									alt=""
									src={Article6}
									className="articleimagesmall"
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
									Він охороняє весь день, ніколи не спить,
									ніколи не відволікається. З ним ти завжди у
									безпеці, все це про Reolink Argus 3. І ми
									розповімо про всю вижимку з характеристик та
									функціоналу цього монстру.
								</p>
								<p className="date">07.12.21</p>
							</Grid>
						</Grid>
					</Stack>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={920} maxWidth={1279}>
				<Box sx={{ mr: 20, ml: 20 }}>
					<Box sx={{ mb: 10 }}></Box>

					<Stack>
						<Grid container>
							<Grid item xs={3} className="grid">
								<img
									alt=""
									src={Article5}
									className="articleimagesmall"
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
									Він охороняє весь день, ніколи не спить,
									ніколи не відволікається. З ним ти завжди у
									безпеці, все це про Reolink Argus 3. І ми
									розповімо про всю вижимку з характеристик та
									функціоналу цього монстру.
								</p>
								<p className="date">07.12.21</p>
							</Grid>
						</Grid>
						<Box sx={{ mb: 7 }}></Box>

						<Grid container>
							<Grid item xs={3} className="grid">
								<img
									alt=""
									src={Article6}
									className="articleimagesmall"
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
									Він охороняє весь день, ніколи не спить,
									ніколи не відволікається. З ним ти завжди у
									безпеці, все це про Reolink Argus 3. І ми
									розповімо про всю вижимку з характеристик та
									функціоналу цього монстру.
								</p>
								<p className="date">07.12.21</p>
							</Grid>
						</Grid>
					</Stack>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={1280}>
				<Box sx={{ mr: 20, ml: 20 }}>
					<Box sx={{ mb: 10 }}></Box>
					<Grid container>
						<Grid item xs={6} sx={{ backgroundColor: "#FFFFFF" }}>
							<Grid container>
								<Grid item xs={3} className="grid">
									<img
										alt=""
										src={Article5}
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
										АКУМУЛЯТОРНА WI-FI КАМЕРА REOLINK ARGUS
										3
									</h6>
									<p className="description">
										Він охороняє весь день, ніколи не спить,
										ніколи не відволікається. З ним ти
										завжди у безпеці, все це про Reolink
										Argus 3. І ми розповімо про всю вижимку
										з характеристик та функціоналу цього
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
										src={Article6}
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
										АКУМУЛЯТОРНА WI-FI КАМЕРА REOLINK ARGUS
										3
									</h6>
									<p className="description">
										Він охороняє весь день, ніколи не спить,
										ніколи не відволікається. З ним ти
										завжди у безпеці, все це про Reolink
										Argus 3. І ми розповімо про всю вижимку
										з характеристик та функціоналу цього
										монстру.
									</p>
									<p className="date">07.12.21</p>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</MediaQuery>
		</>
	);
}

export default ArticleThird;
