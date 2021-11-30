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
import MediaQuery from "react-responsive";

function CardYes2() {
	return (
		<>
			<MediaQuery maxWidth={359}>
				<Box sx={{ mb: 5, mr: 2, ml: 2 }}>
					<h4>Популярные товары</h4>
					<Carousel>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic6}
												className="cardpicturessmallx"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 2,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic7}
												className="cardpicturessmallx"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 2,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic8}
												className="cardpicturessmallx"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 2,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
					</Carousel>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={360} maxWidth={465}>
				<Box sx={{ mb: 5, mr: 2, ml: 2 }}>
					<h4>Популярные товары</h4>
					<Carousel>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic6}
												className="cardpicturessmall"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 4,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic7}
												className="cardpicturessmall"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 4,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic8}
												className="cardpicturessmall"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 4,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
					</Carousel>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={466} maxWidth={624}>
				<Box sx={{ mb: 5, mr: 2, ml: 2 }}>
					<h4>Популярные товары</h4>
					<Carousel>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic6}
												className="cardpictures"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 7,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic7}
												className="cardpictures"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 7,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={7}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
										<CardContent>
											<img
												alt=""
												src={Pic8}
												className="cardpictures"
											/>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												Аналоговый 4-дюймовый
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												видеодомофон с сенсорными
											</p>
											<p
												className="cardfontp"
												sx={{ fontSize: "small" }}
											>
												кнопками Slinex SQ-04 Black
											</p>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
											<StarBorderIcon
												sx={{
													color: "#004194",
													fontSize: "small",
												}}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 7,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{
														color: "#FFFFFF",
														fontSize: "small",
													}}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</Carousel.Item>
					</Carousel>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={625} maxWidth={1013}>
				<Box sx={{ mb: 5, mr: 2, ml: 2 }}>
					<h4>Популярные товары</h4>
					<Carousel>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={5}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={5}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={5}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
			</MediaQuery>
			<MediaQuery minWidth={1014} maxWidth={1279}>
				<Box sx={{ mb: 5, mr: 2, ml: 2 }}>
					<h4>Популярные товары</h4>
					<Carousel>
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={3}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{ color: "#FFFFFF" }}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Box sx={{ mr: 5 }}></Box>
								<Grid item xs={3}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={3}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{ color: "#FFFFFF" }}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Box sx={{ mr: 5 }}></Box>
								<Grid item xs={3}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
						<Carousel.Item interval={1500}>
							<Grid
								container
								spacing={0.5}
								sx={{ justifyContent: "center" }}
							>
								<Grid item xs={3}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
											>
												<ShoppingCartOutlinedIcon
													sx={{ color: "#FFFFFF" }}
												/>
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Box sx={{ mr: 5 }}></Box>
								<Grid item xs={3}>
									<Card sx={{ maxWidth: 500, boxShadow: 7 }}>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
			</MediaQuery>
			<MediaQuery minWidth={1280}>
				<Box sx={{ mb: 5, mr: 2, ml: 2 }}>
					<h4>Популярные товары</h4>
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarIcon
												sx={{ color: "#004194" }}
											/>
											<StarBorderIcon
												sx={{ color: "#004194" }}
											/>
										</CardContent>

										<CardActions>
											<Button
												size="small"
												sx={{
													color: "#01233E",
													mr: 12,
												}}
											>
												1800 ₴
											</Button>
											<Button
												size="small"
												variant="contained"
												sx={{
													backgroundColor: "#004194",
												}}
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
			</MediaQuery>
		</>
	);
}

export default CardYes2;
