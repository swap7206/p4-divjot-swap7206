import { Typography } from "@mui/material";
import AddItemCmp from "../cmp/AddItemCmp";
import ListCmp from "../cmp/ListCmp";
import { useLocalStorageNonString } from "../hooks/useLocalStorage";

function TodoListApp() {
    const [listItems, setListItems] = useLocalStorageNonString("todoList", []);

    const handleListUpdate = (listItems) => {
        setListItems(listItems);
    }

    return (
        <div style={{ padding: "20px", marginInline: "20%" }}>
            <Typography variant="h4" gutterBottom component="div" >
                To Do List
            </Typography>
            <AddItemCmp handleListUpdate={handleListUpdate} />
            <ListCmp listItems={listItems} handleListUpdate={handleListUpdate} />
        </div>
    );
}

export default TodoListApp;
