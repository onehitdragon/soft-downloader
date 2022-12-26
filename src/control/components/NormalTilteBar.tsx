import { memo } from "react"

const NormalTilteBar = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center mb-3">
            <span className="text-2xl font-bold">
                {title}
            </span>
            <div className="flex-1 h-1 bg-red-400 ml-4 rounded"></div>
        </div>
    );
}

export default memo(NormalTilteBar);