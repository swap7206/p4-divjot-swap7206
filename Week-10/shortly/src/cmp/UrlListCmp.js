import { List } from '@mui/material'
//cmp
import UrlListRow from './UrlListRow';

const UrlListCmp = (props) => {
    const listItems = props.listItems;
    console.info("listItems",listItems);

    return (
            <List>
                {listItems.map((item, index) => (
                    <UrlListRow key={index} listItem={item} index={index} />
                ))
                }
            </List>
    )
}

export default UrlListCmp;
