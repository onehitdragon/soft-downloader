import { memo } from "react"

const TitleBar = () => {
    return (
        <div className="px-4 py-3 flex items-center">
            <div className="w-12 h-1.5 cursor-pointer bg-slate-600 mr-4 rounded"></div>
            <span className="mr-1 text-red-400 font-semibold text-lg">MỚI</span>
            <span className="font-semibold text-lg">NHẤT</span>
            <div className="w-full h-1.5 cursor-pointer bg-slate-600 ml-4 rounded"></div>
        </div>
    );
}

export default memo(TitleBar);