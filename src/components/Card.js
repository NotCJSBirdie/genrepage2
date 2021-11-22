import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Pic1 from "./assets/pic1.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Card.css";
import Pic2 from "./assets/pic2.png";
import Pic3 from "./assets/pic3.png";
import Pic4 from "./assets/pic4.png";
import Pic5 from "./assets/pic5.png";

function CardYes() {
	return (
		<Box sx={{ mb: 5, mr: 2, ml: 2 }}>
			<h4>Популярные товары</h4>
			<Grid container spacing={0.5}>
				<Grid item xs={2.4}>
					<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
						<CardContent>
							<img alt="" src={Pic1} className="cardpictures" />
							<h6 className="cardfont">Аналоговый 4-дюймовый</h6>
							<h6 className="cardfont">
								видеодомофон с сенсорными
							</h6>
							<h6 className="cardfont">
								кнопками Slinex SQ-04 Black
							</h6>
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarBorderIcon sx={{ color: "#004194" }} />
						</CardContent>

						<CardActions>
							<Button
								size="small"
								sx={{ color: "#01233E", mr: 12 }}
							>
								1800 ₴
							</Button>
							<Button
								size="small"
								variant="contained"
								sx={{ backgroundColor: "#004194" }}
							>
								<ShoppingCartOutlinedIcon
									sx={{ color: "#FFFFFF" }}
								/>
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={2.4}>
					<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
						<CardContent>
							<img alt="" src={Pic2} className="cardpictures" />
							<h6 className="cardfont">Аналоговый 4-дюймовый</h6>
							<h6 className="cardfont">
								видеодомофон с сенсорными
							</h6>
							<h6 className="cardfont">
								кнопками Slinex SQ-04 Black
							</h6>
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarBorderIcon sx={{ color: "#004194" }} />
						</CardContent>

						<CardActions>
							<Button
								size="small"
								sx={{ color: "#01233E", mr: 12 }}
							>
								1800 ₴
							</Button>
							<Button
								size="small"
								variant="contained"
								sx={{ backgroundColor: "#004194" }}
							>
								<ShoppingCartOutlinedIcon
									sx={{ color: "#FFFFFF" }}
								/>
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={2.4}>
					<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
						<CardContent>
							<img alt="" src={Pic3} className="cardpictures" />
							<h6 className="cardfont">Аналоговый 4-дюймовый</h6>
							<h6 className="cardfont">
								видеодомофон с сенсорными
							</h6>
							<h6 className="cardfont">
								кнопками Slinex SQ-04 Black
							</h6>
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarBorderIcon sx={{ color: "#004194" }} />
						</CardContent>

						<CardActions>
							<Button
								size="small"
								sx={{ color: "#01233E", mr: 12 }}
							>
								1800 ₴
							</Button>
							<Button
								size="small"
								variant="contained"
								sx={{ backgroundColor: "#004194" }}
							>
								<ShoppingCartOutlinedIcon
									sx={{ color: "#FFFFFF" }}
								/>
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={2.4}>
					<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
						<CardContent>
							<img alt="" src={Pic4} className="cardpictures" />
							<h6 className="cardfont">Аналоговый 4-дюймовый</h6>
							<h6 className="cardfont">
								видеодомофон с сенсорными
							</h6>
							<h6 className="cardfont">
								кнопками Slinex SQ-04 Black
							</h6>
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarBorderIcon sx={{ color: "#004194" }} />
						</CardContent>

						<CardActions>
							<Button
								size="small"
								sx={{ color: "#01233E", mr: 12 }}
							>
								1800 ₴
							</Button>
							<Button
								size="small"
								variant="contained"
								sx={{ backgroundColor: "#004194" }}
							>
								<ShoppingCartOutlinedIcon
									sx={{ color: "#FFFFFF" }}
								/>
							</Button>
						</CardActions>
					</Card>
				</Grid>

				<Grid item xs={2.4}>
					<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
						<CardContent>
							<img alt="" src={Pic5} className="cardpictures" />
							<h6 className="cardfont">Аналоговый 4-дюймовый</h6>
							<h6 className="cardfont">
								видеодомофон с сенсорными
							</h6>
							<h6 className="cardfont">
								кнопками Slinex SQ-04 Black
							</h6>
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarIcon sx={{ color: "#004194" }} />
							<StarBorderIcon sx={{ color: "#004194" }} />
						</CardContent>

						<CardActions>
							<Button
								size="small"
								sx={{ color: "#01233E", mr: 12 }}
							>
								1800 ₴
							</Button>
							<Button
								size="small"
								variant="contained"
								sx={{ backgroundColor: "#004194" }}
							>
								<ShoppingCartOutlinedIcon
									sx={{ color: "#FFFFFF" }}
								/>
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
}

export default CardYes;
