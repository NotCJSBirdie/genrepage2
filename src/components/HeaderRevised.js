import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "./HeaderRevised.css";

function HeaderRevised() {
	return (
		<Navbar className="navbarrevised">
			<Container fluid>
				<Navbar.Brand>
					<IconButton
						sx={{ ml: 1, display: "flex" }}
						aria-label="menu"
						style={{ color: "#FFFFFF" }}
					>
						<MenuIcon />
					</IconButton>
				</Navbar.Brand>
				<Navbar.Brand>
					<IconButton
						sx={{ p: "10px", display: "flex" }}
						aria-label="menu"
						style={{ color: "#FFFFFF" }}
					>
						<p className="contentheading">Каталог товаров</p>
					</IconButton>
				</Navbar.Brand>
				<Navbar.Brand>
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
							inputProps={{
								"aria-label": "search google maps",
							}}
						/>
						<IconButton
							type="submit"
							sx={{ p: "10px" }}
							aria-label="search"
						>
							<SearchIcon />
						</IconButton>
					</Paper>
				</Navbar.Brand>

				<Navbar.Collapse className="justify-content-end">
					<Nav>
						<IconButton
							className="icon1"
							aria-label="menu"
							style={{ color: "#FFFFFF" }}
						>
							<p className="contentheading">Вход</p>
						</IconButton>

						<IconButton
							className="icon1"
							aria-label="menu"
							style={{ color: "#FFFFFF" }}
						>
							<PersonOutlineIcon />
						</IconButton>
						<IconButton
							aria-label="menu"
							style={{ color: "#FFFFFF" }}
						>
							<FavoriteBorderIcon />
						</IconButton>

						<IconButton
							aria-label="menu"
							style={{ color: "#FFFFFF" }}
						>
							<ShoppingCartOutlinedIcon />
						</IconButton>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default HeaderRevised;
