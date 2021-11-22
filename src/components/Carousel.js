import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import CarouselBackground from "./assets/carouselbg.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function CarouselSolo() {
	return (
		<div className="CarouselSolo">
			<Carousel>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src={CarouselBackground}
						alt="Image One"
					/>
					<Carousel.Caption>
						<section className="carouselfont">
							<h4>Инновационные системы</h4>
							<h4>безопасности с датчиком</h4>
							<h4>распознавания лица!</h4>
						</section>
						<Box sx={{ mb: 6 }}></Box>
						<section className="carouselfont">
							<p>
								Системы безопасности с функцией распознавания
								лица
							</p>
							<p>уже в Company name. Совершенно новый уровень</p>
							<p>
								качества для жилой и коммерческой недвижимости.
							</p>
							<p>Будь уверен в своей безопасности!</p>
						</section>
						<Box sx={{ mb: 6 }}></Box>
						<section className="carouselfont">
							<Button
								variant="outlined"
								sx={{
									mb: 6,
									color: "#FFFFFF",
									borderColor: "#FFFFFF",
								}}
							>
								<p className="button">Подробнее</p>
							</Button>
						</section>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className="d-block w-100"
						src={CarouselBackground}
						alt="Image Two"
					/>
					<Carousel.Caption>
						<section className="carouselfont">
							<h4>Инновационные системы</h4>
							<h4>безопасности с датчиком</h4>
							<h4>распознавания лица!</h4>
						</section>
						<Box sx={{ mb: 6 }}></Box>
						<section className="carouselfont">
							<p>
								Системы безопасности с функцией распознавания
								лица
							</p>
							<p>уже в Company name. Совершенно новый уровень</p>
							<p>
								качества для жилой и коммерческой недвижимости.
							</p>
							<p>Будь уверен в своей безопасности!</p>
						</section>
						<Box sx={{ mb: 6 }}></Box>
						<section className="carouselfont">
							<Button
								variant="outlined"
								sx={{
									mb: 6,
									color: "#FFFFFF",
									borderColor: "#FFFFFF",
								}}
							>
								<p className="button">Подробнее</p>
							</Button>
						</section>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className="d-block w-100"
						src={CarouselBackground}
						alt="Image Two"
					/>
					<Carousel.Caption>
						<section className="carouselfont">
							<h4>Инновационные системы</h4>
							<h4>безопасности с датчиком</h4>
							<h4>распознавания лица!</h4>
						</section>
						<Box sx={{ mb: 6 }}></Box>
						<section className="carouselfont">
							<p>
								Системы безопасности с функцией распознавания
								лица
							</p>
							<p>уже в Company name. Совершенно новый уровень</p>
							<p>
								качества для жилой и коммерческой недвижимости.
							</p>
							<p>Будь уверен в своей безопасности!</p>
						</section>
						<Box sx={{ mb: 6 }}></Box>
						<section className="carouselfont">
							<Button
								variant="outlined"
								sx={{
									mb: 6,
									color: "#FFFFFF",
									borderColor: "#FFFFFF",
								}}
							>
								<p className="button">Подробнее</p>
							</Button>
						</section>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default CarouselSolo;
