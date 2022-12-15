import { useReducer } from "react";
import UrlInputCmp from "./UrlInputCmp";
import UrlListCmp from "./UrlListCmp";

const reducer = (state, { type, data }) => {
    switch (type) {
        case "add":
            return { ...state, urlList: [...state.urlList, data] };
        default:
            return state;
    }
};

const ShortlyCmp = () => {
    const [state, dispatch] = useReducer(reducer, {
        urlList: [
            {
                url: "https://developer.chrome.com/blog/new-in-devtools-105/?utm_source=devtools",
                shortUrl: "https://shrtco.de/zYKqCb",
            },
        ],
    });

    const handleAddUrl = (url, shortUrl) => {
        dispatch({ type: "add", data: { url, shortUrl } });
    };

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <UrlInputCmp handleAddUrl={handleAddUrl} />
                <UrlListCmp listItems={state.urlList} />
            </div>
        </>
    );
}

export default ShortlyCmp;
