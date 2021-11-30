import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./SideForm.css";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SideForm() {
	const [value, setValue] = React.useState([0, 12000]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<List
				sx={{
					width: "100%",
					height: "100%",
					maxWidth: 360,
					bgcolor: "#FFFFFF",
					boxShadow: 7,
				}}
				className="entirelist"
			>
				<Form.Label className="mb-2">
					<h5>Популярные фильтры:</h5>
				</Form.Label>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Акционные предложения (4)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Новинки (18)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Label className="mb-2">
					<h5>Цена:</h5>
				</Form.Label>
				<Row className="mb-3">
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Control
							required
							type="text"
							placeholder="First name"
							defaultValue="0"
						/>
					</Form.Group>
					-
					<Form.Group as={Col} md="4" controlId="validationCustom02">
						<Form.Control
							required
							type="text"
							placeholder="Last name"
							defaultValue="12000"
						/>
					</Form.Group>
				</Row>

				<ListItem>
					<Slider
						getAriaLabel={() => "Temperature range"}
						value={value}
						onChange={handleChange}
						valueLabelDisplay="auto"
						sx={{ color: "#041a3e" }}
					/>
				</ListItem>
				<Form.Label className="mb-2">
					<h5>Бренд:</h5>
				</Form.Label>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="NN (12)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Atis (6)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Neo Light (3)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Arni (6)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Commax (12)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Luxury (18)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Dom (32)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Dahya (16)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Label className="mb-2">
					<h5>Способ подключения:</h5>
				</Form.Label>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Беспровоной (43)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Проводной (21)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Беспроводной / Проводной (6)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>

				<Form.Label className="mb-2">
					<h5>Управление:</h5>
				</Form.Label>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Кнопочное (34)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Сенсорное (62)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Check
						required
						label="Кнопочное / Сенсорное (13)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>

				<Form.Label className="mb-2">
					<h5>Диагональ:</h5>
				</Form.Label>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="2.4” (6)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="4.3” (34)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="7” (108)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="8” (56)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="9” (57)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="10” (19)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Check
						required
						label="10.1” (3)"
						feedback="You must agree before submitting."
						feedbackType="invalid"
					/>
				</Form.Group>
			</List>
		</>
	);
}

export default SideForm;
