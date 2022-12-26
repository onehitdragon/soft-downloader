import { memo } from "react"

const SmallTotalBox = ({ title, total, imageUrl }: { title: string, total: number, imageUrl: string }) => {
    return (
        <div className="bg-slate-600 p-5 rounded-md shadow-md flex m-3 h-fit">
            <img alt="error" src={imageUrl}
                className="mr-2.5 w-12 h-12"/>
            <div className="flex flex-col">
                <span className="text-xl font-bold">{total}</span>
                <span className="font-medium">{title}</span>
            </div>
        </div>
    );
}

export default memo(SmallTotalBox);