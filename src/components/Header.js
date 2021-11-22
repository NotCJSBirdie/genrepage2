import React from "react";
import { useState } from "react";
import "./Header.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Typography from "@mui/material/Typography";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import MediaQuery from "react-responsive";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack";

function Header() {
	return (
		<div className="Header">
			<MediaQuery maxWidth={320}>
				<Button
					sx={{ ml: 0, p: 0, display: "flex" }}
					aria-label="menu"
					style={{
						color: "#FFFFFF",
					}}
					className="menu"
				>
					<MenuIcon sx={{ fontSize: "large" }} />
				</Button>
				<IconButton
					sx={{ display: "flex", fontSize: "10px" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<Stack>
						<p className="contentheading">Каталог</p>
						<p className="contentheading">товаров</p>
					</Stack>
				</IconButton>
				<Paper
					className="paper"
					component="form"
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 150,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Поиск по сайту…"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<PopupState variant="popover" popupId="demo-popup-menu">
					{(popupState) => (
						<React.Fragment>
							<Button
								sx={{ ml: 0, p: 0, display: "flex" }}
								variant="contained"
								{...bindTrigger(popupState)}
							>
								<MoreHorizIcon className="button" />
							</Button>
							<Menu {...bindMenu(popupState)}>
								<MenuItem onClick={popupState.close}>
									<p className="contentheading">Вход</p>
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<PersonOutlineIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<FavoriteBorderIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<ShoppingCartOutlinedIcon />
								</MenuItem>
							</Menu>
						</React.Fragment>
					)}
				</PopupState>
			</MediaQuery>

			<MediaQuery minWidth={321} maxWidth={375}>
				<IconButton
					sx={{ ml: 1, display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<MenuIcon />
				</IconButton>
				<IconButton
					sx={{ p: "10px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<Stack>
						<p className="contentheading">Каталог</p>
						<p className="contentheading">товаров</p>
					</Stack>
				</IconButton>
				<Paper
					className="paper"
					component="form"
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 200,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Поиск по сайту…"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<PopupState variant="popover" popupId="demo-popup-menu">
					{(popupState) => (
						<React.Fragment>
							<Button
								sx={{ ml: 3 }}
								variant="contained"
								{...bindTrigger(popupState)}
							>
								<MoreHorizIcon />
							</Button>
							<Menu {...bindMenu(popupState)}>
								<MenuItem onClick={popupState.close}>
									<p className="contentheading">Вход</p>
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<PersonOutlineIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<FavoriteBorderIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<ShoppingCartOutlinedIcon />
								</MenuItem>
							</Menu>
						</React.Fragment>
					)}
				</PopupState>
			</MediaQuery>
			<MediaQuery minWidth={376} maxWidth={411}>
				<IconButton
					sx={{ ml: 1, display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<MenuIcon />
				</IconButton>
				<IconButton
					sx={{ p: "10px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<Stack>
						<p className="contentheading">Каталог</p>
						<p className="contentheading">товаров</p>
					</Stack>
				</IconButton>
				<Paper
					className="paper"
					component="form"
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 200,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Поиск по сайту…"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<PopupState variant="popover" popupId="demo-popup-menu">
					{(popupState) => (
						<React.Fragment>
							<Button
								sx={{ ml: 5 }}
								variant="contained"
								{...bindTrigger(popupState)}
							>
								<MoreHorizIcon />
							</Button>
							<Menu {...bindMenu(popupState)}>
								<MenuItem onClick={popupState.close}>
									<p className="contentheading">Вход</p>
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<PersonOutlineIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<FavoriteBorderIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<ShoppingCartOutlinedIcon />
								</MenuItem>
							</Menu>
						</React.Fragment>
					)}
				</PopupState>
			</MediaQuery>
			<MediaQuery minWidth={412} maxWidth={539}>
				<IconButton
					sx={{ ml: 1, display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<MenuIcon />
				</IconButton>
				<IconButton
					sx={{ p: "10px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<Stack>
						<p className="contentheading">Каталог</p>
						<p className="contentheading">товаров</p>
					</Stack>
				</IconButton>
				<Paper
					className="paper"
					component="form"
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 200,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Поиск по сайту…"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<PopupState variant="popover" popupId="demo-popup-menu">
					{(popupState) => (
						<React.Fragment>
							<Button
								sx={{ ml: 1 }}
								variant="contained"
								{...bindTrigger(popupState)}
							>
								<MoreHorizIcon />
							</Button>

							<Menu {...bindMenu(popupState)}>
								<MenuItem onClick={popupState.close}>
									<p className="contentheading">Вход</p>
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<PersonOutlineIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<FavoriteBorderIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<ShoppingCartOutlinedIcon />
								</MenuItem>
							</Menu>
						</React.Fragment>
					)}
				</PopupState>
			</MediaQuery>
			<MediaQuery minWidth={540} maxWidth={767}>
				<IconButton
					sx={{ ml: 1, display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<MenuIcon />
				</IconButton>
				<IconButton
					sx={{ p: "10px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<p className="contentheading">Каталог товаров</p>
				</IconButton>
				<Paper
					className="paper"
					component="form"
					sx={{
						ml: 3,
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 400,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Поиск по сайту…"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<PopupState variant="popover" popupId="demo-popup-menu">
					{(popupState) => (
						<React.Fragment>
							<Button
								sx={{ ml: 1 }}
								variant="contained"
								{...bindTrigger(popupState)}
							>
								<MoreHorizIcon />
							</Button>

							<Menu {...bindMenu(popupState)}>
								<MenuItem onClick={popupState.close}>
									<p className="contentheading">Вход</p>
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<PersonOutlineIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<FavoriteBorderIcon />
								</MenuItem>
								<MenuItem onClick={popupState.close}>
									<ShoppingCartOutlinedIcon />
								</MenuItem>
							</Menu>
						</React.Fragment>
					)}
				</PopupState>
			</MediaQuery>
			<MediaQuery minWidth={768} maxWidth={1023}>
				<IconButton
					sx={{ ml: 1, display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<MenuIcon />
				</IconButton>
				<IconButton
					sx={{ p: "10px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<p className="contentheading">Каталог товаров</p>
				</IconButton>
				<Paper
					className="paper"
					component="form"
					sx={{
						ml: 3,
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 400,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Поиск по сайту…"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<IconButton
					className="icon1"
					sx={{ ml: "10px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<p className="contentheading">Вход</p>
				</IconButton>
				<IconButton
					className="icon1"
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<PersonOutlineIcon />
				</IconButton>
				<IconButton
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<FavoriteBorderIcon />
				</IconButton>

				<IconButton
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<ShoppingCartOutlinedIcon />
				</IconButton>
			</MediaQuery>
			<MediaQuery minWidth={1024} maxWidth={1279}>
				<IconButton
					sx={{ ml: 1, display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<MenuIcon />
				</IconButton>
				<IconButton
					sx={{ p: "10px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<p className="contentheading">Каталог товаров</p>
				</IconButton>
				<Paper
					className="paper"
					component="form"
					sx={{
						ml: 3,
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 400,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Поиск по сайту…"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<IconButton
					className="icon1"
					sx={{ ml: "200px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<p className="contentheading">Вход</p>
				</IconButton>
				<IconButton
					className="icon1"
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<PersonOutlineIcon />
				</IconButton>
				<IconButton
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<FavoriteBorderIcon />
				</IconButton>

				<IconButton
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<ShoppingCartOutlinedIcon />
				</IconButton>
			</MediaQuery>
			<MediaQuery minWidth={1280}>
				<IconButton
					sx={{ ml: 1, display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<MenuIcon />
				</IconButton>
				<IconButton
					sx={{ p: "10px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<p className="contentheading">Каталог товаров</p>
				</IconButton>
				<Paper
					className="paper"
					component="form"
					sx={{
						ml: 3,
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 400,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1 }}
						placeholder="Поиск по сайту…"
						inputProps={{ "aria-label": "search google maps" }}
					/>
					<IconButton
						type="submit"
						sx={{ p: "10px" }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</Paper>
				<IconButton
					className="icon1"
					sx={{ ml: "480px", display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<p className="contentheading">Вход</p>
				</IconButton>
				<IconButton
					className="icon1"
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<PersonOutlineIcon />
				</IconButton>
				<IconButton
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<FavoriteBorderIcon />
				</IconButton>

				<IconButton
					sx={{ display: "flex" }}
					aria-label="menu"
					style={{ color: "#FFFFFF" }}
				>
					<ShoppingCartOutlinedIcon />
				</IconButton>
			</MediaQuery>
		</div>
	);
}

export default Header;
