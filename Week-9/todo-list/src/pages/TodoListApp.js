import { Typography } from "@mui/material";
import AddItemCmp from "../cmp/AddItemCmp";
import ListCmp from "../cmp/ListCmp";

function TodoListApp() {
    return (
        <div style={{ padding: "20px", marginInline: "20%" }}>
            <Typography variant="h4" gutterBottom component="div" >
                To Do List
            </Typography>
            <AddItemCmp />
            <ListCmp />
        </div>
    );
}

export default TodoListApp;
