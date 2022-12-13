import {
    Typography,
    Container,
    Paper
} from '@mui/material';
import siteImage from "../assets/site_image.png";
import Footer from "./Footer";
import Header from './Header';
import ShortlyCmp from './ShortlyCmp';

const Layout = () => {

    return (
        <Paper
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: "#eff1f7"
            }}
        >
            <Header/>
            <Container component="main" sx={{ mt: 8, mb: 2, maxWidth: "sm" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <section >
                        <Typography sx={{ pt: 8 }} variant="h3" component="h1" gutterBottom>More than just shorter Links</Typography>
                        <Typography sx={{ pt: 5 }} gutterBottom>
                            Build your brand's recognition and get detailed insights on how your links are performing
                        </Typography>
                    </section>
                    <section>
                        <img src={siteImage} style={{ width: "400px" }} alt="background-poster" />
                    </section>
                </div>
                    <ShortlyCmp/>
            </Container>
            <Footer />
        </Paper>
    );
};

export default Layout;
