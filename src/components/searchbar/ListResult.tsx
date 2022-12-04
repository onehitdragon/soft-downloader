import { memo } from "react"
import ListResultItem from "./ListResultItem";

const ListResult = () => {
    return (
        <div className="bg-slate-900 absolute w-full mt-1 z-50">
            <ListResultItem />
        </div>
    );
}

export default memo(ListResult);