import { Container, Typography, Grid, Box, Link } from '@mui/material';
const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: "#110f16"
			}}
		>
			<Container maxWidth="lg" sx={{ px: 2, color: "#eff1f7" }}>
				<Grid container>
					<Grid item xs={12} sm={3}>
						<Box>
							<Typography variant="h3" component="h1" color="#32303b">Shortly</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Grid container spacing={5}>
							<Grid item xs={12} sm={4}>
								<Box sx={{ fontSize: "larger" }}>Features</Box>
								<Box>
									<Link href='/' color="inherit">Link Shortening</Link>
								</Box>
								<Box>
									<Link href='/' color="inherit">Branded Links</Link>
								</Box>
								<Box>
									<Link href='/' color="inherit">Analytics</Link>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box sx={{ fontSize: "larger" }}>Resources</Box>
								<Box>
									<Link href='/' color="inherit">Blog</Link>
								</Box>
								<Box>
									<Link href='/' color="inherit">Developers</Link>
								</Box>
								<Box>
									<Link href='/' color="inherit">Support</Link>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box sx={{ fontSize: "larger" }}>Company</Box>
								<Box>
									<Link href='/' color="inherit">About</Link>
								</Box>
								<Box>
									<Link href='/' color="inherit">Our Team</Link>
								</Box>
								<Box>
									<Link href='/' color="inherit">Careers</Link>
								</Box>
								<Box>
									<Link href='/' color="inherit">Contact Us</Link>
								</Box>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={3}>
						<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
							<Box>
								<Link href='/' color="inherit">Login</Link>
							</Box>
							<Box sx={{ ml: 4 }}>
								<Link href='/' color="inherit">Sign Up</Link>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
