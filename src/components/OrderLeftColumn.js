import React, { useState } from "react";
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
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./OrderLeftColumn.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button2 from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function OrderLeftColumn() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<h1>OrderLeftColumn</h1>
			<List
				sx={{
					width: "100%",
					height: "100%",
					maxWidth: 650,
					bgcolor: "#FFFFFF",
					boxShadow: 7,
				}}
				className="rightcolumn"
			>
				<Form>
					<Form.Label>Информация о получателе</Form.Label>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Control
								type="email"
								placeholder="Enter email"
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Control
								type="password"
								placeholder="Password"
							/>
						</Form.Group>
					</Row>

					<Form.Group className="mb-3" controlId="formGridAddress1">
						<Form.Control placeholder="Address" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGridAddress1">
						<Form.Control placeholder="Email" />
					</Form.Group>
					<Form.Label>Способ доставки</Form.Label>

					<div className="d-grid gap-2">
						<Button variant="light" size="lg">
							<Navbar className="firstrightrow">
								<Container>
									<Navbar.Brand>
										<Navbar.Text>
											<a href="#login">Icon</a>
										</Navbar.Text>
									</Navbar.Brand>
									<Navbar.Brand>
										<Navbar.Text>
											<Stack>
												<a href="#login">
													Самовывоз с "Укрпошта"
												</a>
												<a href="#login">бесплатно</a>
											</Stack>
										</Navbar.Text>
									</Navbar.Brand>
									<Navbar.Toggle />
									<Navbar.Collapse className="justify-content-end">
										<Navbar.Text>
											<a href="#login">></a>
										</Navbar.Text>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Button>
						<Button variant="light" size="lg">
							<Navbar className="firstrightrow">
								<Container>
									<Navbar.Brand>
										<Navbar.Text>
											<a href="#login">Город</a>
										</Navbar.Text>
									</Navbar.Brand>
									<Navbar.Toggle />
									<Navbar.Collapse className="justify-content-end">
										<Navbar.Text>
											<a href="#login">></a>
										</Navbar.Text>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Button>
						<Button variant="light" size="lg">
							<Navbar className="firstrightrow">
								<Container>
									<Navbar.Brand>
										<Navbar.Text>
											<a href="#login">Отделение</a>
										</Navbar.Text>
									</Navbar.Brand>
									<Navbar.Toggle />
									<Navbar.Collapse className="justify-content-end">
										<Navbar.Text>
											<a href="#login">></a>
										</Navbar.Text>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Button>
					</div>

					<Form.Label>Способ оплаты</Form.Label>
				</Form>

				<Button2
					id="basic-button"
					aria-controls="basic-menu"
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={handleClick}
					sx={{ width: 600 }}
				>
					<Navbar className="firstrightrow">
						<Container>
							<Navbar.Brand>
								<Navbar.Text>
									<a href="#login">Отделение</a>
								</Navbar.Text>
							</Navbar.Brand>
							<Navbar.Toggle />
							<Box sx={{ mr: 55 }}></Box>

							<Navbar.Collapse className="justify-content-end">
								<Navbar.Text>
									<a href="#login">></a>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</Button2>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}
				>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
			</List>
		</div>
	);
}

export default OrderLeftColumn;
