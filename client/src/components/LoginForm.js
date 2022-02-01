import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { apiLoginUser } from "../utils/api";

const theme = createTheme();


export default function LoginForm({ setAuth }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const loginUser = (email, password) => {
		apiLoginUser(email, password).then((res) => {
			// console.log(res);
			setAuth(true);
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await loginUser({
			email,
			password,
		});
	};
	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar style={{ backgroundColor: "rgb(51, 156, 80, 100)" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}></Grid>
							<Grid item xs={12}></Grid>

							<Grid item xs={12}>
								<TextField
									defaultValue=""
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									defaultValue=""
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							aria-label="Justify"
							sx={{
								mt: 3,
								mb: 2,
								color: "#fff",
								backgroundColor: "#CF2F2F",
								"&:hover": {
									// color: "rgb(237,67,67)",
									backgroundColor: "#a62626",
								},
							}}
						>
							Sign in
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/signup" variant="body2">
									Don’t have an Account? Sign up
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
