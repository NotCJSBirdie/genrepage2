import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import "./Sidebar.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Sidebar() {
	return (
		<div className="sidebar">
			<Stack>
				<Box>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">ДОМОФОНЫ</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">ВИДеоНаблюдение</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">Умный дом</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">Контроль доступа</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">Сигнализации</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">
									Сетевое обородувание
								</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">СЭлектропитание</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">Металодетекторы</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">Аксессуары</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<Button sx={{ color: "#000000" }}>
								<h6 className="buttonfont">Акции</h6>
							</Button>
						</Grid>
						<Grid item xs={1}>
							<Button sx={{ color: "#000000" }}>
								<KeyboardArrowRightIcon />
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Stack>
		</div>
	);
}

export default Sidebar;
