import { memo } from "react"
import ListResultItem from "./ListResultItem";

const ListResult = ({softs}: { softs: Soft[] }) => {
    return (
        <div className="bg-slate-900 absolute w-full mt-1 z-50 max-h-96 overflow-y-scroll main-scroll-bar">
            {
                softs.map((soft) => {
                    return (
                        <ListResultItem key={soft.id} soft={soft} />
                    );
                })
            }
        </div>
    );
}

export default memo(ListResult);