import { useState } from 'react'
import { Checkbox, Divider, List, Paper, Typography } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
//cmp
import { IconButtonCmp } from './ButtonCmp'
import ListItemWithColumns from './ListItemWithColumns'

const ListCmp = () => {

    const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem("todoList")));

    const handleChange = (event, item, index) => {
        item.checked = event.target.checked
        const temp = listItems;
        temp.splice(index, 1, item);
        localStorage.setItem("todoList", JSON.stringify(temp));
        setListItems(JSON.parse(localStorage.getItem("todoList")));
    }

    const handleDeleteItem = (index) => {
        console.log("clicked", index);
        const temp = listItems;
        temp.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(temp));
        setListItems(JSON.parse(localStorage.getItem("todoList")));
    }

    return (
        <Paper sx={{ marginTop: "20px" }}>
            <List>
                {listItems.map((item, index) => (
                    <>
                        <ListItemWithColumns
                            key={index}
                            leftIcon={
                                <Checkbox
                                    checked={item.checked}
                                    onChange={(event) => (handleChange(event, item, index))}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            cmpLeft={item.checked ? <Typography sx={{ textDecoration: "line-through" }}>{item.task}</Typography> : item.task}
                            cmpRight={
                                <IconButtonCmp
                                    onClick={() => (handleDeleteItem(index))}
                                >
                                    <RemoveCircleOutlineIcon />
                                </IconButtonCmp>
                            }
                            styleContainer={{ alignItems: "center" }}
                            style={{ padding: "8px 16px" }}
                        />
                        <Divider />
                    </>
                ))
                }
            </List>
        </Paper>
    )
}

export default ListCmp
