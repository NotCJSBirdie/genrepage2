import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Facebook from "./assets/fb.png";
import Instagram from "./assets/instagram.png";
import Mail from "./assets/mail.png";
import Telegram from "./assets/telegram.png";
import Twitter from "./assets/twitter.png";
import Divider from "@mui/material/Divider";
import MediaQuery from "react-responsive";
import Stack from "@mui/material/Stack";

function Footer() {
	return (
		<div className="Footer">
			<MediaQuery maxWidth={634}>
				<Box className="stack" sx={{ flexGrow: 1 }}>
					<Stack spacing={2}>
						<Box className="Box">
							<section>
								<p className="heavyfp">Компания</p>
								<p className="lightfp">О нас</p>
								<p className="lightfp">Почему Company name</p>
								<p className="lightfp">
									Как работает Company name
								</p>
								<p className="lightfp">Партнёрам</p>
								<p className="lightfp">Акции</p>
								<p className="lightfp">Вакансии</p>
							</section>
						</Box>
						<Box>
							<section>
								<p className="heavyfp">Продукты</p>
								<p className="lightfp">Видеонаблюдение</p>
								<p className="lightfp">Сигнализации</p>
								<p className="lightfp">Сетевое оборудование</p>
								<p className="lightfp">Домофоны</p>
								<p className="lightfp">Умный дом</p>
								<p className="lightfp">Контроль доступа</p>
								<p className="lightfp">Электропитание</p>
								<p className="lightfp">Металодетекторы</p>
							</section>
						</Box>
						<Box>
							<section>
								<p className="heavyfp">Контакты</p>
								<p className="lightfp">киев, украина, 03142</p>
								<p className="lightfp">
									Ул. Академика крымского,
								</p>
								<p className="lightfp">4а, оф. 114</p>
								<p className="lightfp">(097) 039 14 10</p>
								<p className="lightfp">(044) 039 14 10</p>
								<p className="lightfp">(050) 039 14 10</p>
							</section>
						</Box>
						<Box>
							<h1>COMPANY NAME</h1>
							<img src={Telegram} className="telegram" alt="" />
							<img src={Facebook} className="facebook" alt="" />
							<img src={Instagram} className="instagram" alt="" />
							<img src={Twitter} className="twitter" alt="" />
							<img src={Mail} className="mail" alt="" />
						</Box>
						<Box sx={{ mb: 5 }}></Box>
						<Box>
							<section>
								<p className="lightfp">
									Политика конфиденциальности
								</p>
							</section>
						</Box>
						<Box>
							<section>
								<p className="lightfp">Гарантия</p>
							</section>
						</Box>
						<Box>
							<section>
								<p className="lightfp">
									Соглашение с конечным пользователем
								</p>
							</section>
						</Box>
						<Box>
							<section>
								<p className="lightfp">
									© 2021 COMPANY NAME CH. Все права защищены
								</p>
							</section>
						</Box>
					</Stack>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={634} maxWidth={767}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={5}>
						<Grid item xs={2} sx={{ ml: 3.1 }}>
							<section>
								<p className="heavyfp">Компания</p>
								<p className="lightfp">О нас</p>
								<p className="lightfp">Почему Company name</p>
								<p className="lightfp">
									Как работает Company name
								</p>
								<p className="lightfp">Партнёрам</p>
								<p className="lightfp">Акции</p>
								<p className="lightfp">Вакансии</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 5 }} xs={2}>
							<section>
								<p className="heavyfp">Продукты</p>
								<p className="lightfp">Видеонаблюдение</p>
								<p className="lightfp">Сигнализации</p>
								<p className="lightfp">Сетевое оборудование</p>
								<p className="lightfp">Домофоны</p>
								<p className="lightfp">Умный дом</p>
								<p className="lightfp">Контроль доступа</p>
								<p className="lightfp">Электропитание</p>
								<p className="lightfp">Металодетекторы</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 5 }} xs={2}>
							<section>
								<p className="heavyfp">Контакты</p>
								<p className="lightfp">киев, украина, 03142</p>
								<p className="lightfp">
									Ул. Академика крымского,
								</p>
								<p className="lightfp">4а, оф. 114</p>
								<p className="lightfp">(097) 039 14 10</p>
								<p className="lightfp">(044) 039 14 10</p>
								<p className="lightfp">(050) 039 14 10</p>
							</section>
						</Grid>
						<Grid item sx={{}} xs={4} className="FooterLogo">
							<h1>COMPANY NAME</h1>
							<img src={Telegram} className="telegram" alt="" />
							<img src={Facebook} className="facebook" alt="" />
							<img src={Instagram} className="instagram" alt="" />
							<img src={Twitter} className="twitter" alt="" />
							<img src={Mail} className="mail" alt="" />
						</Grid>
					</Grid>
					<Box sx={{ mb: 8 }} />

					<Grid container spacing={5}>
						<Grid item xs={3} sx={{ ml: 3.1 }}>
							<section>
								<p className="lightfp">
									Политика конфиденциальности
								</p>
							</section>
						</Grid>

						<Grid item xs={1.7}>
							<section>
								<p className="lightfp">Гарантия</p>
							</section>
						</Grid>

						<Grid item xs={2.6}>
							<section>
								<p className="lightfp">
									Соглашение с конечным пользователем
								</p>
							</section>
						</Grid>
						<Grid item className="copyright" xs={4}>
							<section>
								<p className="lightfp">
									© 2021 COMPANY NAME CH. Все права защищены
								</p>
							</section>
						</Grid>
					</Grid>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1023}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={5}>
						<Grid item xs={2} sx={{ ml: 3.1 }}>
							<section>
								<p className="heavyfp">Компания</p>
								<p className="lightfp">О нас</p>
								<p className="lightfp">Почему Company name</p>
								<p className="lightfp">
									Как работает Company name
								</p>
								<p className="lightfp">Партнёрам</p>
								<p className="lightfp">Акции</p>
								<p className="lightfp">Вакансии</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 6 }} xs={2}>
							<section>
								<p className="heavyfp">Продукты</p>
								<p className="lightfp">Видеонаблюдение</p>
								<p className="lightfp">Сигнализации</p>
								<p className="lightfp">Сетевое оборудование</p>
								<p className="lightfp">Домофоны</p>
								<p className="lightfp">Умный дом</p>
								<p className="lightfp">Контроль доступа</p>
								<p className="lightfp">Электропитание</p>
								<p className="lightfp">Металодетекторы</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 6 }} xs={2}>
							<section>
								<p className="heavyfp">Контакты</p>
								<p className="lightfp">киев, украина, 03142</p>
								<p className="lightfp">
									Ул. Академика крымского,
								</p>
								<p className="lightfp">4а, оф. 114</p>
								<p className="lightfp">(097) 039 14 10</p>
								<p className="lightfp">(044) 039 14 10</p>
								<p className="lightfp">(050) 039 14 10</p>
							</section>
						</Grid>
						<Grid item sx={{}} xs={4} className="FooterLogo">
							<h1>COMPANY NAME</h1>
							<img src={Telegram} className="telegram" alt="" />
							<img src={Facebook} className="facebook" alt="" />
							<img src={Instagram} className="instagram" alt="" />
							<img src={Twitter} className="twitter" alt="" />
							<img src={Mail} className="mail" alt="" />
						</Grid>
					</Grid>
					<Box sx={{ mb: 8 }} />

					<Grid container spacing={5}>
						<Grid item xs={3} sx={{ ml: 3.1 }}>
							<section>
								<p className="lightfp">
									Политика конфиденциальности
								</p>
							</section>
						</Grid>

						<Grid item xs={1.7}>
							<section>
								<p className="lightfp">Гарантия</p>
							</section>
						</Grid>

						<Grid item xs={2.6}>
							<section>
								<p className="lightfp">
									Соглашение с конечным пользователем
								</p>
							</section>
						</Grid>
						<Grid item className="copyright" xs={4}>
							<section>
								<p className="lightfp">
									© 2021 COMPANY NAME CH. Все права защищены
								</p>
							</section>
						</Grid>
					</Grid>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={1024} maxWidth={1279}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={5}>
						<Grid item xs={2} sx={{ ml: 3.1 }}>
							<section>
								<p className="heavyfp">Компания</p>
								<p className="lightfp">О нас</p>
								<p className="lightfp">Почему Company name</p>
								<p className="lightfp">
									Как работает Company name
								</p>
								<p className="lightfp">Партнёрам</p>
								<p className="lightfp">Акции</p>
								<p className="lightfp">Вакансии</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 7 }} xs={2}>
							<section>
								<p className="heavyfp">Продукты</p>
								<p className="lightfp">Видеонаблюдение</p>
								<p className="lightfp">Сигнализации</p>
								<p className="lightfp">Сетевое оборудование</p>
								<p className="lightfp">Домофоны</p>
								<p className="lightfp">Умный дом</p>
								<p className="lightfp">Контроль доступа</p>
								<p className="lightfp">Электропитание</p>
								<p className="lightfp">Металодетекторы</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 7 }} xs={2}>
							<section>
								<p className="heavyfp">Контакты</p>
								<p className="lightfp">киев, украина, 03142</p>
								<p className="lightfp">
									Ул. Академика крымского,
								</p>
								<p className="lightfp">4а, оф. 114</p>
								<p className="lightfp">(097) 039 14 10</p>
								<p className="lightfp">(044) 039 14 10</p>
								<p className="lightfp">(050) 039 14 10</p>
							</section>
						</Grid>
						<Grid item sx={{}} xs={4} className="FooterLogo">
							<h1>COMPANY NAME</h1>
							<img src={Telegram} className="telegram" alt="" />
							<img src={Facebook} className="facebook" alt="" />
							<img src={Instagram} className="instagram" alt="" />
							<img src={Twitter} className="twitter" alt="" />
							<img src={Mail} className="mail" alt="" />
						</Grid>
					</Grid>
					<Box sx={{ mb: 8 }} />

					<Grid container spacing={5}>
						<Grid item xs={3} sx={{ ml: 3.1 }}>
							<section>
								<p className="lightfp">
									Политика конфиденциальности
								</p>
							</section>
						</Grid>

						<Grid item xs={1.7}>
							<section>
								<p className="lightfp">Гарантия</p>
							</section>
						</Grid>

						<Grid item xs={2.6}>
							<section>
								<p className="lightfp">
									Соглашение с конечным пользователем
								</p>
							</section>
						</Grid>
						<Grid item className="copyright" xs={4}>
							<section>
								<p className="lightfp">
									© 2021 COMPANY NAME CH. Все права защищены
								</p>
							</section>
						</Grid>
					</Grid>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={1280}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={5}>
						<Grid item xs={2} sx={{ ml: 3.1 }}>
							<section>
								<p className="heavyfp">Компания</p>
								<p className="lightfp">О нас</p>
								<p className="lightfp">Почему Company name</p>
								<p className="lightfp">
									Как работает Company name
								</p>
								<p className="lightfp">Партнёрам</p>
								<p className="lightfp">Акции</p>
								<p className="lightfp">Вакансии</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 8 }} xs={2}>
							<section>
								<p className="heavyfp">Продукты</p>
								<p className="lightfp">Видеонаблюдение</p>
								<p className="lightfp">Сигнализации</p>
								<p className="lightfp">Сетевое оборудование</p>
								<p className="lightfp">Домофоны</p>
								<p className="lightfp">Умный дом</p>
								<p className="lightfp">Контроль доступа</p>
								<p className="lightfp">Электропитание</p>
								<p className="lightfp">Металодетекторы</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 8 }} xs={2}>
							<section>
								<p className="heavyfp">Контакты</p>
								<p className="lightfp">киев, украина, 03142</p>
								<p className="lightfp">
									Ул. Академика крымского,
								</p>
								<p className="lightfp">4а, оф. 114</p>
								<p className="lightfp">(097) 039 14 10</p>
								<p className="lightfp">(044) 039 14 10</p>
								<p className="lightfp">(050) 039 14 10</p>
							</section>
						</Grid>
						<Grid item sx={{ ml: 5 }} xs={4} className="FooterLogo">
							<h1>COMPANY NAME</h1>
							<img src={Telegram} className="telegram" alt="" />
							<img src={Facebook} className="facebook" alt="" />
							<img src={Instagram} className="instagram" alt="" />
							<img src={Twitter} className="twitter" alt="" />
							<img src={Mail} className="mail" alt="" />
						</Grid>
					</Grid>
					<Box sx={{ mb: 8 }} />

					<Grid container spacing={5}>
						<Grid item xs={3} sx={{ ml: 3.1 }}>
							<section>
								<p className="lightfp">
									Политика конфиденциальности
								</p>
							</section>
						</Grid>

						<Grid item xs={1.7}>
							<section>
								<p className="lightfp">Гарантия</p>
							</section>
						</Grid>

						<Grid item xs={2.6}>
							<section>
								<p className="lightfp">
									Соглашение с конечным пользователем
								</p>
							</section>
						</Grid>
						<Grid item className="copyright" xs={4} sx={{ ml: 4 }}>
							<section>
								<p className="lightfp">
									© 2021 COMPANY NAME CH. Все права защищены
								</p>
							</section>
						</Grid>
					</Grid>
				</Box>
			</MediaQuery>
		</div>
	);
}

export default Footer;
