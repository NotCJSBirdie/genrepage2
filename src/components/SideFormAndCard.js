import React from "react";
import Grid from "@mui/material/Grid";
import "./Card.css";
import Pic1 from "./assets/pic1.png";
import Pic2 from "./assets/pic2.png";
import Pic3 from "./assets/pic3.png";
import Pic4 from "./assets/pic4.png";
import Pic5 from "./assets/pic5.png";
import Pic11 from "./assets/pic11.png";
import Pic12 from "./assets/pic12.png";
import Pic13 from "./assets/pic13.png";
import Pic14 from "./assets/pic14.png";
import Pic15 from "./assets/pic15.png";
import Pic16 from "./assets/pic16.png";
import Pic17 from "./assets/pic17.png";
import Pic18 from "./assets/pic18.png";
import Pic19 from "./assets/pic19.png";
import Pic20 from "./assets/pic20.png";
import Pic21 from "./assets/pic21.png";
import Pic22 from "./assets/pic22.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SideForm from "./SideForm.js";
import "./SideFormAndCard.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function SideFormAndCard() {
	return (
		<>
			<Grid
				container
				spacing={0.5}
				className="overallgrid"
				direction="row"
				justifyContent="center"
			>
				<Grid item xs={3} className="maingrid" sx={{ margin: 1 }}>
					<SideForm className="sideform" />
				</Grid>
				<Grid item xs={8} className="maingrid" sx={{ margin: 1 }}>
					<Stack>
						<Box edge="end">
							<Navbar className="topnavbar">
								<Container>
									<Navbar.Toggle />
									<Navbar.Collapse className="justify-content-end">
										<Navbar.Text>Сортировать:</Navbar.Text>

										<Box sx={{ mr: 3 }}></Box>

										<Navbar.Text>
											<a href="#login">по популярности</a>
										</Navbar.Text>

										<Box sx={{ mr: 3 }}></Box>

										<Navbar.Text>
											<a href="#login">
												от дорогих к дешёвым
											</a>
										</Navbar.Text>

										<Box sx={{ mr: 3 }}></Box>

										<Navbar.Text>
											<a href="#login">
												от дешёвых к дорогим
											</a>
										</Navbar.Text>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Box>
						<Box sx={{ mb: 1 }}></Box>
						<Grid container spacing={0.5} sx={{ mb: 6 }}>
							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic11}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>
							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic12}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>

							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic13}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>

							<Grid item xs={2.5} className="carditem">
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic14}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>
						</Grid>

						<Grid container spacing={0.5} sx={{ mb: 6 }}>
							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic15}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>
							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic16}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>

							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic17}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>

							<Grid item xs={2.5} className="carditem">
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic18}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>
						</Grid>

						<Grid container spacing={0.5} sx={{ mb: 6 }}>
							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic19}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>
							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic20}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>

							<Grid
								item
								xs={2.5}
								className="carditem"
								sx={{ mr: 6 }}
							>
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic21}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>

							<Grid item xs={2.5} className="carditem">
								<Card sx={{ maxWidth: 250, boxShadow: 7 }}>
									<CardContent>
										<img
											alt=""
											src={Pic22}
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
										<StarBorderIcon
											sx={{ color: "#004194" }}
										/>
									</CardContent>

									<Navbar>
										<Container>
											<Navbar.Brand>
												<Button
													size="small"
													sx={{
														color: "#01233E",
													}}
												>
													1800 ₴
												</Button>
											</Navbar.Brand>
											<Navbar.Collapse className="justify-content-end">
												<Button
													size="medium"
													variant="contained"
													sx={{
														backgroundColor:
															"#004194",
													}}
												>
													<ShoppingCartOutlinedIcon
														sx={{
															color: "#FFFFFF",
														}}
													/>
												</Button>
											</Navbar.Collapse>
										</Container>
									</Navbar>
								</Card>
							</Grid>
						</Grid>
					</Stack>
				</Grid>
			</Grid>
		</>
	);
}

export default SideFormAndCard;
