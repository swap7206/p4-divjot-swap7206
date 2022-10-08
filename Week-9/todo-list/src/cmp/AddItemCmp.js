import { useState } from 'react'
import { Card, ListItem, InputAdornment, TextField } from '@mui/material';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
//cmp
import { ButtonCmp } from "../cmp/ButtonCmp";

const AddItemCmp = () => {
    const [input, setInput] = useState();

    const handleOnInputChange = (event) => {
        setInput(event.target.value);
    }
    const handleAddTask = () => {
        const todoItem = {
            task: input,
            checked: false
        }
        const temp = JSON.parse(localStorage.getItem("todoList"));
        temp.push(todoItem);
        localStorage.setItem("todoList", JSON.stringify(temp));
        setInput("");
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <ListItem sx={{ justifyContent: "space-around" }}>
                <TextField
                    id="outlined-basic"
                    label="To do..."
                    variant="outlined"
                    sx={{ width: "70%" }}
                    placeholder={"Got any new task?"}
                    value={input}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <NoteAddRoundedIcon />
                            </InputAdornment>
                        ),
                        'aria-label': 'controlled'
                    }}
                    onChange={handleOnInputChange}
                />
                <ButtonCmp variant="contained" onClick={handleAddTask}>ADD</ButtonCmp>
            </ListItem>
        </Card>
    )
}

export default AddItemCmp;