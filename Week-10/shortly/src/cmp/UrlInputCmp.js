import { useState } from 'react'
import { Card, ListItem, TextField, Button, CircularProgress, Snackbar } from '@mui/material';
import { Constants } from '../constants';

const UrlInputCmp = (props) => {
    const [inputUrl, setInputUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const handleOnInputChange = (event) => {
        setInputUrl(event.target.value);
        setAlertMsg("");
    };

    const handleGetShortUrl = () => {
        if (inputUrl === "") {
            setAlertMsg("Please enter a valid url");
        } else {
            setLoading(true);
            const url = `${Constants.BASE_URL}${Constants.SHORTEN}?url=${inputUrl}`
            fetch(url).then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            }).then((data) => {
                props.handleAddUrl(data.result.original_link, data.result.full_short_link);
                setInputUrl("");
            }).catch((error) => {
                console.warn(error);
                setAlertMsg("Something went wrong! Please check if the entered URL is valid or try again later.");
            }).finally(() => (setLoading(false)));
        }
    };

    return (
        <>
        <Card sx={{ width: "80%", mt: 5, backgroundColor: "#eff1f7" }}>
            <ListItem sx={{ justifyContent: "space-around" }}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{ width: "70%" }}
                    placeholder={"Shorten a link here..."}
                    value={inputUrl}
                    onChange={handleOnInputChange}
                />
                {loading ? <CircularProgress /> : <Button sx={{ backgroundColor: "#2dd0d0" }} variant="contained" onClick={handleGetShortUrl}>Shorten It!</Button>}
            </ListItem>
            </Card>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={alertMsg !== ""}
                autoHideDuration={3000}
                onClose={() => (setAlertMsg(""))}
                message={alertMsg}
            />
            </>
    )
}

export default UrlInputCmp;