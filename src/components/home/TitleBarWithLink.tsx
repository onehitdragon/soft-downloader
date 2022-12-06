import { memo } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const TitleBarWithLink = ({ head, tail }: { head: string, tail: string }) => {
    return (
        <div className="px-4 py-3 flex items-center">
            <div className="w-12 h-1.5 cursor-pointer bg-slate-600 mr-4 rounded"></div>
            <span className="mr-1 text-red-400 font-semibold text-lg">{head}</span>
            <span className="font-semibold text-lg">{tail}</span>
            <div className="flex-1 h-1.5 cursor-pointer bg-slate-600 ml-4 rounded"></div>
            {/*  */}
            <div className="flex items-center ml-5 mr-1 hover:text-red-400 transition-all
                cursor-pointer">
                <span className="font-bold text-sm">XEM TẤT CẢ</span>
                <ChevronRightIcon className="w-7"/>
            </div>
        </div>
    );
}

export default memo(TitleBarWithLink);