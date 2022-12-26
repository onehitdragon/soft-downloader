import { memo } from "react";

export type ItemListTotalBox = {
    title: string,
    total: number,
    imageUrl: string
}

const ListTotalBoxItem = ({ item }: { item: ItemListTotalBox}) => {
    return (
        <>
            <li className="flex justify-between items-center">
                <div className="flex items-center">
                    <img alt="error" src={item.imageUrl}
                        className="mr-2.5 w-10 h-10"/>
                    <span className="text-sm font-medium">{item.title}</span>
                </div>
                <span className="text-xl font-bold">{item.total}</span>
            </li>
            <div className="h-1 bg-red-400 rounded mt-1.5 mb-3"></div>
        </>
        
    );
}

export default memo(ListTotalBoxItem);