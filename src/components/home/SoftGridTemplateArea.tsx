import { memo } from "react";
import { ChatAlt2Icon, FireIcon } from "@heroicons/react/solid";
import { convertDateToString, numberToFloat } from "../../util/convert";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../util/api";

const SoftGridTemplateArea = ({ softs }: { softs: Soft[] }) => {
    const firstSoft = softs[2];
    const navigate = useNavigate();

    return (
        <div className="mx-4 my-3 p-0.5 pb-0 flex bg-slate-600">
            <div className="w-1/2 pb-5" onClick={() => { navigate(`/soft/${firstSoft.id}`) }}>
                <img alt="error"
                    src={
                        BASE_URL + (firstSoft.content.find(content => content.type === "image") as ImageElement).url
                    }
                    className=""/>
                <p className="px-3 my-2 text-red-400 cursor-pointer hover:underline font-medium text-lg">
                    {firstSoft.title}
                </p>
                <p className="px-3 my-2 text-sm">
                    {
                        typeof firstSoft.content.find(content => content.type === "text") !== "undefined" &&
                        (firstSoft.content.find(content => content.type === "text") as TextElement).value
                    }
                </p>
                <div className="px-3 flex items-center opacity-90">
                    <span>{firstSoft.author.fullName}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400 mx-1.5"></span>
                    <span className="text-sm">
                        {convertDateToString(new Date(firstSoft.createDate))}
                    </span>
                    <div className="flex ml-2 text-red-400">
                        <FireIcon className="w-5"/>
                        <span>{numberToFloat(firstSoft.amountView)}</span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex">
                        <ChatAlt2Icon className="w-5"/>
                        <span>127</span>
                    </div>
                </div>
            </div>
            <ul className="w-1/2">
                {
                    softs.map((soft) => {
                        if(soft.id !== firstSoft.id){
                            return (
                                <li key={soft.id} className="flex flex-col bg-black hover:bg-slate-400 group cursor-pointer transition-all"
                                    onClick={() => { navigate(`/soft/${soft.id}`) }}>
                                    <div className="flex p-2">
                                        <img alt="error"
                                            src={
                                                BASE_URL + (soft.content.find(content => content.type === "image") as ImageElement).url
                                            }
                                            className="mr-3 w-40"/>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <span className="hover:underline font-medium">
                                                {soft.title}
                                            </span>
                                            <div className="flex justify-between opacity-90">
                                                <span>{convertDateToString(new Date(soft.createDate))}</span>
                                                <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                                    <FireIcon className="w-5"/>
                                                    <span>{numberToFloat(soft.amountView)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-slate-400"/>
                                </li>
                            );
                        }
                        return "";
                    })
                }
            </ul>
        </div>
    );
}

export default memo(SoftGridTemplateArea);