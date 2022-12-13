import { Button, ListItem, ListItemText, Snackbar, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

const UrlListRow = React.memo((props) => {
    const { url, shortUrl } = props.listItem;
    const index = props.index;
    const [copied, setCopied] = useState(false);

    const handleOnCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(shortUrl);
    }

    return (
        <>
            {index === 0 && <Typography>Example</Typography>}
            {index === 1 && <Typography>Results</Typography>}
            <Paper sx={{ mt: 2, backgroundColor: "#eff1f7" }}>
            <ListItem>
                <ListItemText
                    primaryTypographyProps={{
                        style: {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }
                    }}
                >
                    {url}
                </ListItemText>
            <ListItem style={{ alignSelf: "flex-end", width: "35%", color: "#2dd0d0", justifyContent: "space-between"}}>
            <ListItemText>{shortUrl}</ListItemText>
                <Button sx={{ backgroundColor: "#2dd0d0" }} variant="contained" onClick={handleOnCopy}>Copy</Button>
            </ListItem>
                </ListItem>
            </Paper>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={copied}
                autoHideDuration={3000}
                onClose={() => (setCopied(false))}
                message={"Copied to clipboard"}
            />
        </>
    )
});

export default UrlListRow;