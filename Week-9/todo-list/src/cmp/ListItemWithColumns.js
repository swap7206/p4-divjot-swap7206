import { ListItem, ListItemText } from "@mui/material";

const ListItemWithColumns = ({ cmpLeft, cmpRight, cmpSecondary, leftIcon, rightIcon, styleContainer, styleLeft, styleRight, styleText, ...other }) => (
    <ListItem {...other}>
        {leftIcon}
        <ListItemText
            primary={
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", ...styleContainer }}>
                    <div style={styleLeft}>{cmpLeft}</div>
                    <div style={styleRight}>{cmpRight}</div>
                </div>
            }
            secondary={cmpSecondary}
            style={styleText}
        />
        {rightIcon}
    </ListItem>
);

export default ListItemWithColumns;
