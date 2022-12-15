import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';

const navItems = ['Features', 'Pricing', 'Resources'];

const Header = () => (
	<Box sx={{ display: 'flex' }}>
		<AppBar component="nav" sx={{ px: 2, backgroundColor: "white", alignItems: "center" }}>
			<Toolbar sx={{ width: "70%" }}>
				<Grid container>
					<Grid item xs={12} sm={4}>
						<Typography
							variant="h4"
							sx={{ color: "#110f16", fontWeight: "bold", flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							Shortly
						</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box sx={{ color: "#005B96" }}>
							{navItems.map((item) => (
								<Button key={item} >
									{item}
								</Button>
							))}
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box sx={{ color: "#005B96", display: "flex", justifyContent: "flex-end" }}>
							<Button>
								Login
							</Button>
							<Button>
								Sign Up
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	</Box>
);

export default Header;
