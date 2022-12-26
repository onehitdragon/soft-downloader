import { memo } from "react";
import ListTotalBoxItem, { ItemListTotalBox } from "./ListTotalBoxItem";

const ListTotalBox = ({ title, list }: { title: string, list: ItemListTotalBox[] }) => {
    return (
        <div className="bg-slate-600 px-2.5 pt-5 rounded-md m-3 w-56 h-fit">
            <div className="mb-1.5">
                <span className="font-medium">{title}</span>
            </div>
            <ul className="">
                {
                    list.map((item, idx) => {
                        return (
                            <ListTotalBoxItem key={idx} item={item}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default memo(ListTotalBox);