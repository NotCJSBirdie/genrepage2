import React from "react";
import "./BrandBanner.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MediaQuery from "react-responsive";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Facebook2 from "./assets/facebook2.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function BrandBanner() {
	return (
		<div className="brandbanner">
			<MediaQuery maxWidth={1023}>
				<Box sx={{ flexGrow: 1 }} className="boxofthestack">
					<Stack spacing={2} className="stackofthebanner">
						<h2 className="brandbannertext">COMPANY NAME</h2>
						<h6 sx={{ fontSize: 12 }}>(097) 039 14 10</h6>
						<h6 sx={{ fontSize: 12 }}>(044) 039 14 10</h6>
						<h6 sx={{ fontSize: 12 }}>(050) 039 14 10</h6>
						<h6 sx={{ fontSize: 12 }}>Все контакты</h6>
						<PopupState variant="popover" popupId="demo-popup-menu">
							{(popupState) => (
								<React.Fragment>
									<Button
										sx={{ ml: 0, p: 0, display: "flex" }}
										variant="contained"
										{...bindTrigger(popupState)}
										style={{
											color: "#000000",
											backgroundColor: "#FFFFFF",
										}}
									>
										<KeyboardArrowDownOutlinedIcon />
									</Button>
									<Menu {...bindMenu(popupState)}>
										<MenuItem onClick={popupState.close}>
											<p className="contentheading">
												(097) 039 14 10
											</p>
										</MenuItem>
										<MenuItem onClick={popupState.close}>
											<p className="contentheading">
												(050) 039 14 10
											</p>
										</MenuItem>
										<MenuItem onClick={popupState.close}>
											<p className="contentheading">
												(044) 039 14 10
											</p>
										</MenuItem>
										<MenuItem onClick={popupState.close}>
											<MailOutlineIcon />
											<Box sx={{ mr: 2 }}></Box>
											<p className="contentheading">
												Email: companyneme@gmail.com
											</p>
										</MenuItem>
										<MenuItem onClick={popupState.close}>
											<TelegramIcon />
											<Box sx={{ mr: 2 }}></Box>
											<p className="contentheading">
												Наш Telegram!
											</p>
										</MenuItem>
										<MenuItem onClick={popupState.close}>
											<InstagramIcon />
											<Box sx={{ mr: 2 }}></Box>
											<p className="contentheading">
												Наш Instagram!
											</p>
										</MenuItem>
										<MenuItem onClick={popupState.close}>
											<TwitterIcon />
											<Box sx={{ mr: 2 }}></Box>
											<p className="contentheading">
												Наш Twitter!
											</p>
										</MenuItem>
										<MenuItem onClick={popupState.close}>
											<FacebookIcon />
											<Box sx={{ mr: 2 }}></Box>

											<p className="contentheading">
												Наш Facebook!
											</p>
										</MenuItem>
									</Menu>
								</React.Fragment>
							)}
						</PopupState>
					</Stack>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={1024} maxWidth={1279}>
				<Box sx={{ flexGrow: 1 }} className="boxofthegrid">
					<Grid container spacing={1}>
						<Grid item xs={3} sx={{ ml: 0.5, mt: 1.5 }}>
							<h2 className="brandbannertext">COMPANY NAME</h2>
						</Grid>

						<Grid
							item
							xs={1.5}
							sx={{ ml: 3.1, mt: 2.5, fontSize: 12 }}
						>
							<h6 sx={{ fontSize: 12 }}>(097) 039 14 10</h6>
						</Grid>
						<Grid item xs={1.5} sx={{ mt: 2.5 }}>
							<h6 sx={{ fontSize: 12 }}>(044) 039 14 10</h6>
						</Grid>
						<Grid item xs={1.5} sx={{ mt: 2.5 }}>
							<h6 sx={{ fontSize: 12 }}>(050) 039 14 10</h6>
						</Grid>
						<Grid item xs={1.5} sx={{ ml: 16.5, mt: 2.5 }}>
							<h6 className="contact" sx={{ fontSize: 12 }}>
								Все контакты
							</h6>
						</Grid>
						<Grid item xs={0.3} sx={{ mt: 1.3 }}>
							<PopupState
								variant="popover"
								popupId="demo-popup-menu"
							>
								{(popupState) => (
									<React.Fragment>
										<Button
											sx={{
												mt: 1,
												ml: 0,
												p: 0,
												display: "flex",
											}}
											variant="contained"
											{...bindTrigger(popupState)}
											style={{
												color: "#000000",
												backgroundColor: "#FFFFFF",
											}}
										>
											<KeyboardArrowDownOutlinedIcon />
										</Button>
										<Menu {...bindMenu(popupState)}>
											<MenuItem
												onClick={popupState.close}
											>
												<p className="contentheading">
													(097) 039 14 10
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<p className="contentheading">
													(050) 039 14 10
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<p className="contentheading">
													(044) 039 14 10
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<MailOutlineIcon />
												<Box sx={{ mr: 2 }}></Box>
												<p className="contentheading">
													Email: companyneme@gmail.com
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<TelegramIcon />
												<Box sx={{ mr: 2 }}></Box>
												<p className="contentheading">
													Наш Telegram!
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<InstagramIcon />
												<Box sx={{ mr: 2 }}></Box>
												<p className="contentheading">
													Наш Instagram!
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<TwitterIcon />
												<Box sx={{ mr: 2 }}></Box>
												<p className="contentheading">
													Наш Twitter!
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<FacebookIcon />
												<Box sx={{ mr: 2 }}></Box>

												<p className="contentheading">
													Наш Facebook!
												</p>
											</MenuItem>
										</Menu>
									</React.Fragment>
								)}
							</PopupState>
						</Grid>
					</Grid>
				</Box>
			</MediaQuery>
			<MediaQuery minWidth={1280}>
				<Box sx={{ flexGrow: 1 }} className="boxofthegrid">
					<Grid container spacing={1}>
						<Grid item xs={3} sx={{ ml: 0.5, mt: 1.5 }}>
							<h2 className="brandbannertext">COMPANY NAME</h2>
						</Grid>

						<Grid
							item
							xs={1.5}
							sx={{ ml: 3.1, mt: 2.5, fontSize: 12 }}
						>
							<h6 sx={{ fontSize: 12 }}>(097) 039 14 10</h6>
						</Grid>
						<Grid item xs={1.5} sx={{ mt: 2.5 }}>
							<h6 sx={{ fontSize: 12 }}>(044) 039 14 10</h6>
						</Grid>
						<Grid item xs={1.5} sx={{ mt: 2.5 }}>
							<h6 sx={{ fontSize: 12 }}>(050) 039 14 10</h6>
						</Grid>
						<Grid item xs={1.5} sx={{ ml: 21, mt: 2.5 }}>
							<h6 className="contact" sx={{ fontSize: 12 }}>
								Все контакты
							</h6>
						</Grid>
						<Grid item xs={0.3} sx={{ mt: 1.3 }}>
							<PopupState
								variant="popover"
								popupId="demo-popup-menu"
							>
								{(popupState) => (
									<React.Fragment>
										<Button
											sx={{
												mt: 1,
												ml: 0,
												p: 0,
												display: "flex",
											}}
											variant="contained"
											{...bindTrigger(popupState)}
											style={{
												color: "#000000",
												backgroundColor: "#FFFFFF",
											}}
										>
											<KeyboardArrowDownOutlinedIcon />
										</Button>
										<Menu {...bindMenu(popupState)}>
											<MenuItem
												onClick={popupState.close}
											>
												<p className="contentheading">
													(097) 039 14 10
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<p className="contentheading">
													(050) 039 14 10
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<p className="contentheading">
													(044) 039 14 10
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<MailOutlineIcon />
												<Box sx={{ mr: 2 }}></Box>
												<p className="contentheading">
													Email: companyneme@gmail.com
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<TelegramIcon />
												<Box sx={{ mr: 2 }}></Box>
												<p className="contentheading">
													Наш Telegram!
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<InstagramIcon />
												<Box sx={{ mr: 2 }}></Box>
												<p className="contentheading">
													Наш Instagram!
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<TwitterIcon />
												<Box sx={{ mr: 2 }}></Box>
												<p className="contentheading">
													Наш Twitter!
												</p>
											</MenuItem>
											<MenuItem
												onClick={popupState.close}
											>
												<FacebookIcon />
												<Box sx={{ mr: 2 }}></Box>

												<p className="contentheading">
													Наш Facebook!
												</p>
											</MenuItem>
										</Menu>
									</React.Fragment>
								)}
							</PopupState>
						</Grid>
					</Grid>
				</Box>
			</MediaQuery>
		</div>
	);
}

export default BrandBanner;
