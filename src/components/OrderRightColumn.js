import React from "react";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import "./OrderRightColumn.css";
import Pic31 from "./assets/pic31.png";
import Pic32 from "./assets/pic32.png";
import Pic33 from "./assets/pic33.png";
import Stack from "react-bootstrap/Stack";

function OrderRightColumn() {
	return (
		<div>
			<h1>Right Column</h1>
			<List
				sx={{
					width: "100%",
					height: "100%",
					maxWidth: 360,
					bgcolor: "#FFFFFF",
					boxShadow: 7,
				}}
				className="rightcolumn"
			>
				<Navbar className="firstrightrow">
					<Container>
						<Navbar.Brand>
							<Navbar.Text>
								<a href="#login">Ваш заказ</a>
							</Navbar.Text>
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								<a href="#login">Изменить</a>
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Container fluid>
					<Row>
						<Col xs={5}>
							<img alt="" src={Pic31} className="orderpic" />
						</Col>
						<Col xs={7}>
							<Stack>
								<div className="bg-light border">
									Аналоговый 4-дюймовый видеодомофон с
									сенсорными кнопками Slinex SQ-04 Black{" "}
								</div>
								<div className="bg-light border">
									Цена: 7000₴
								</div>
								<div className="bg-light border">
									Количество: 1 шт.
								</div>
							</Stack>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row>
						<Col xs={5}>
							<img alt="" src={Pic32} className="orderpic" />
						</Col>
						<Col xs={7}>
							<Stack>
								<div className="bg-light border">
									Аналоговый 4-дюймовый видеодомофон с
									сенсорными кнопками Slinex SQ-04 Black{" "}
								</div>
								<div className="bg-light border">
									Цена: 7000₴
								</div>
								<div className="bg-light border">
									Количество: 1 шт.
								</div>
							</Stack>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row>
						<Col xs={5}>
							<img alt="" src={Pic33} className="orderpic" />
						</Col>
						<Col xs={7}>
							<Stack>
								<div className="bg-light border">
									Аналоговый 4-дюймовый видеодомофон с
									сенсорными кнопками Slinex SQ-04 Black{" "}
								</div>
								<div className="bg-light border">
									Цена: 7000₴
								</div>
								<div className="bg-light border">
									Количество: 1 шт.
								</div>
							</Stack>
						</Col>
					</Row>
				</Container>
				<Navbar className="firstrightrow">
					<Container>
						<Navbar.Brand>
							<Navbar.Text>
								<a href="#login">К оплате</a>
							</Navbar.Text>
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								<a href="#login">19300₴</a>
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</List>
		</div>
	);
}

export default OrderRightColumn;
