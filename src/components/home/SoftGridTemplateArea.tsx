import { memo } from "react";
import { ChatAlt2Icon, FireIcon } from "@heroicons/react/solid";

const SoftGridTemplateArea = ({ softs }: { softs: Soft[] }) => {
    const firstSoft = softs[0];
    const firstSoftCreateDate = new Date(firstSoft.createDate);
    console.log(firstSoft);

    return (
        <div className="mx-4 my-3 p-0.5 pb-0 flex bg-slate-600">
            <div className="w-1/2 pb-5">
                <img alt="error"
                    src="https://lehait.net/wp-content/uploads/2022/10/Ghost.Win10.22H2-750x430.png"
                    className=""/>
                <p className="px-3 my-2 text-red-400 cursor-pointer hover:underline font-medium text-lg">
                    {firstSoft.title}
                </p>
                <p className="px-3 my-2 text-sm">
                    Ghost Win 10 22H2 được làm từ bộ cài Win 10 22H2 (Update Build 19045.2130) nguyên gốc lược bỏ các apps không cần thiết, giữ lại Defender và Store.
                </p>
                <div className="px-3 flex items-center opacity-90">
                    <span>Admin</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400 mx-1.5"></span>
                    <span className="text-sm">
                        {`${firstSoftCreateDate.getDate()} Th${firstSoftCreateDate.getMonth() + 1}, ${firstSoftCreateDate.getFullYear()}`}
                    </span>
                    <div className="flex ml-2 text-red-400">
                        <FireIcon className="w-5"/>
                        <span>{firstSoft.amountView}</span>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex">
                        <ChatAlt2Icon className="w-5"/>
                        <span>127</span>
                    </div>
                </div>
            </div>
            <ul className="w-1/2">
                <li className="flex flex-col bg-black hover:bg-slate-400 group cursor-pointer transition-all">
                    <div className="flex p-2">
                        <img alt="error" src="https://lehait.net/wp-content/uploads/2022/07/Ghost.Win10.Pro_.21H2-86x64.jpg"
                            className="mr-3"/>
                        <div className="flex-1 flex flex-col justify-between">
                            <span className="hover:underline font-medium">
                                Ghost Win 10 Pro 21H2 - No & Full Soft, Update July 2022
                            </span>
                            <div className="flex justify-between opacity-90">
                                <span>23 Th10, 2022</span>
                                <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                    <FireIcon className="w-5"/>
                                    <span>27.289</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-slate-400"/>
                </li>
                <li className="flex flex-col bg-black hover:bg-slate-400 group cursor-pointer transition-all">
                    <div className="flex p-2">
                        <img alt="error" src="https://lehait.net/wp-content/uploads/2022/07/Ghost.Win10.Pro_.21H2-86x64.jpg"
                            className="mr-3"/>
                        <div className="flex-1 flex flex-col justify-between">
                            <span className="hover:underline font-medium">
                                Ghost Win 10 Pro 21H2 - No & Full Soft, Update July 2022
                            </span>
                            <div className="flex justify-between opacity-90">
                                <span>23 Th10, 2022</span>
                                <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                    <FireIcon className="w-5"/>
                                    <span>27.289</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-slate-400"/>
                </li>
                <li className="flex flex-col bg-black hover:bg-slate-400 group cursor-pointer transition-all">
                    <div className="flex p-2">
                        <img alt="error" src="https://lehait.net/wp-content/uploads/2022/07/Ghost.Win10.Pro_.21H2-86x64.jpg"
                            className="mr-3"/>
                        <div className="flex-1 flex flex-col justify-between">
                            <span className="hover:underline font-medium">
                                Ghost Win 10 Pro 21H2 - No & Full Soft, Update July 2022
                            </span>
                            <div className="flex justify-between opacity-90">
                                <span>23 Th10, 2022</span>
                                <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                    <FireIcon className="w-5"/>
                                    <span>27.289</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-slate-400"/>
                </li>
                <li className="flex flex-col bg-black hover:bg-slate-400 group cursor-pointer transition-all">
                    <div className="flex p-2">
                        <img alt="error" src="https://lehait.net/wp-content/uploads/2022/07/Ghost.Win10.Pro_.21H2-86x64.jpg"
                            className="mr-3"/>
                        <div className="flex-1 flex flex-col justify-between">
                            <span className="hover:underline font-medium">
                                Ghost Win 10 Pro 21H2 - No & Full Soft, Update July 2022
                            </span>
                            <div className="flex justify-between opacity-90">
                                <span>23 Th10, 2022</span>
                                <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                    <FireIcon className="w-5"/>
                                    <span>27.289</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-slate-400"/>
                </li>
                <li className="flex flex-col bg-black hover:bg-slate-400 group cursor-pointer transition-all">
                    <div className="flex p-2">
                        <img alt="error" src="https://lehait.net/wp-content/uploads/2022/07/Ghost.Win10.Pro_.21H2-86x64.jpg"
                            className="mr-3"/>
                        <div className="flex-1 flex flex-col justify-between">
                            <span className="hover:underline font-medium">
                                Ghost Win 10 Pro 21H2 - No & Full Soft, Update July 2022
                            </span>
                            <div className="flex justify-between opacity-90">
                                <span>23 Th10, 2022</span>
                                <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                    <FireIcon className="w-5"/>
                                    <span>27.289</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-slate-400"/>
                </li>
            </ul>
        </div>
    );
}

export default memo(SoftGridTemplateArea);