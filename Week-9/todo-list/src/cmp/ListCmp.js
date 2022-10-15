import { useEffect, useState } from 'react';
import { Checkbox, Divider, List, Paper, Typography } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
//cmp
import { IconButtonCmp } from './ButtonCmp'
import ListItemWithColumns from './ListItemWithColumns'

const ListCmp = (props) => {
    const listItems = props.listItems;
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        console.log("hiiiii")
    }, [props.listItems !== listItems])


    const handleChange = (event, item, index) => {
        item.checked = event.target.checked
        const temp = listItems;
        temp.splice(index, 1, item);
        props.handleListUpdate(temp);
        setUpdate(!update);
    }

    const handleDeleteItem = (index) => {
        const temp = listItems;
        temp.splice(index, 1);
        if (temp !== null) {
            props.handleListUpdate(temp);
        } else {
            props.handleListUpdate([]);
        }
        setUpdate(!update);
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
                                    <RemoveCircleOutlineIcon sx={{ color: "red" }} />
                                </IconButtonCmp>
                            }
                            styleContainer={{ alignItems: "center" }}
                            style={{ padding: "8px 16px" }}
                        />
                        {(listItems.length > 1 && index !== (listItems.length - 1)) && <Divider />}
                    </>
                ))
                }
            </List>
        </Paper>
    )
}

export default ListCmp
