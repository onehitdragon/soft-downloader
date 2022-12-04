import { memo } from "react";
import ListResult from "./ListResult";

const SearchBar = () => {
    return (
        <div className="flex-1 mx-2 max-w-lg relative">
            <input className="w-full px-2.5 py-1.5 text-base text-black outline-none" placeholder="Tìm kiếm gì đó..."/>
            <ListResult />
        </div>
    );
}

export default memo(SearchBar);