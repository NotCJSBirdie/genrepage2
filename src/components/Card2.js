import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Pic6 from "./assets/pic6.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Card2.css";
import Pic7 from "./assets/pic7.png";
import Pic8 from "./assets/pic8.png";
import Pic9 from "./assets/pic9.png";
import Pic10 from "./assets/pic10.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

function CardYes2() {
	return (
		<Box sx={{ mb: 5, mr: 2, ml: 2 }}>
			<h4>Новинки</h4>
			<Carousel>
				<Carousel.Item interval={1500}>
					<Grid container spacing={0.5}>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
								<CardContent>
									<img
										alt=""
										src={Pic6}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic7}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic8}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic9}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic10}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<Grid container spacing={0.5}>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
								<CardContent>
									<img
										alt=""
										src={Pic6}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic7}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic8}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic9}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic10}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<Grid container spacing={0.5}>
						<Grid item xs={2.4}>
							<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
								<CardContent>
									<img
										alt=""
										src={Pic6}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic7}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic8}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic9}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
									<img
										alt=""
										src={Pic10}
										className="cardpictures"
									/>
									<h6 className="cardfont">
										Аналоговый 4-дюймовый
									</h6>
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
				</Carousel.Item>
			</Carousel>
		</Box>
	);
}

export default CardYes2;
