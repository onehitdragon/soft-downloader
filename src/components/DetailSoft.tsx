import { ChatAlt2Icon, FireIcon } from "@heroicons/react/solid";
import { ClockIcon, TrendingUpIcon } from "@heroicons/react/outline";
import { memo, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "./footer/Footer";
import HeaderBar from "./headerbar/HeaderBar";
import MainMenu from "./main-menu/MainMenu";
import api from "../util/api";
import { convertDateToString, numberToFloat } from "../util/convert";
import ContentSoft from "./detailsoft/ContentSoft";
import RelativeSoft from "./detailsoft/RelativeSoft";

const DetailSoft = () => {
    const idSoft = useLoaderData();
    const [soft, setSoft] = useState<Soft | null>(null);

    useEffect(() => {
        api.get(`/soft/${idSoft}`)
        .then((res) => {
            return res?.json();
        })
        .then((soft: Soft) => {
            soft.content = (soft.content as any).replaceAll("\\", "\\\\");
            soft.content = JSON.parse(soft.content as any);
            setSoft(soft);
        })
        .catch((err) => {
            console.log(err);
        })

        api.put(`/soft/addViewingSoft/${idSoft}`)
        .catch((err) => {
            console.log(err);
        })
    }, [idSoft])

    return (
        <div className="mx-14 my-4 bg-slate-700 text-white">
            <HeaderBar />
            <MainMenu />
            {
                soft === null ?
                <div className="mx-4 my-3">Đang tải...</div> :
                <>
                    <div className="mx-4 my-3 flex items-center">
                        <span className="text-2xl font-bold">
                            {soft.title}
                        </span>
                        <div className="flex-1 h-1 cursor-pointer bg-red-400 ml-4 rounded"></div>
                    </div>
                    <div className="mx-4 my-3 flex items-center">
                        <span className="mr-1.5 opacity-90">Bởi</span>
                        <span className="text-sm font-medium">{soft?.author.fullName}</span>
                        <span className="mx-2">-</span>
                        <span className="mr-1.5 opacity-90">Cập nhật</span>
                        <span className="text-sm font-medium">
                            {convertDateToString(new Date(soft.createDate))}
                        </span>
                        <span className="mx-2">-</span>
                        <div className="flex text-red-400">
                            <FireIcon className="w-5"/>
                            <span>{numberToFloat(soft.amountView)}</span>
                        </div>
                        <span className="mx-2">-</span>
                        <div className="flex">
                            <ChatAlt2Icon className="w-5"/>
                            <span>127</span>
                        </div>
                    </div>
                    <div className="mx-4 my-3 flex">
                        <div className="w-full">
                            <ContentSoft content={soft.content}/>

                            {/* comment */}
                            <div className="bg-black p-4">
                                {/*  */}
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold">
                                        BÌNH LUẬN
                                    </span>
                                    <div className="flex-1 h-1 cursor-pointer bg-red-400 ml-4 rounded"></div>
                                </div>
                                {/* reply form */}
                                <div className="flex m-3 ml-0">
                                    <div className="">
                                        <img className="w-12 rounded-full bg-white" alt="error"
                                            src="/gamer-icon.png"/>
                                    </div>
                                    <div className="flex flex-col items-end ml-3 flex-1">
                                        <textarea className="outline-0 text-black rounded p-1.5 w-full"
                                            placeholder="Viết bình luận..."/>
                                        <button className="mt-1.5 bg-emerald-400 px-3 py-1 rounded
                                            hover:bg-emerald-500 transition-all w-fit">
                                            Đăng bình luận
                                        </button>
                                    </div>
                                </div>
                                <hr className="opacity-40"/>
                                {/* comment-1 */}
                                <div>
                                    <div className="flex m-3 ml-0">
                                        <div className="">
                                            <img className="w-12 rounded-full bg-white" alt="error"
                                                src="/gamer-icon.png"/>
                                        </div>
                                        <div className="ml-3">
                                            <div className="flex items-center">
                                                <span className="font-medium text-emerald-400 mr-2.5">Ngô Minh Quân</span>
                                                <ClockIcon className="w-4 opacity-90 mr-1"/>
                                                <span className="text-xs opacity-90">8 ngày trước</span>
                                            </div>
                                            <div>
                                                <span>
                                                    cho mình hỏi bản coop nhẹ hơn bản chơi đơn thì nó có đầy đủ như bản đơn ko ạ. tks
                                                </span>
                                            </div>
                                            <button className="mt-1.5 ml-1.5 flex items-center opacity-80 hover:opacity-100 transition-all">
                                                <TrendingUpIcon className="w-5 mr-1"/>
                                                <span className="text-sm">Trả lời</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* reply form */}
                                    <div className="flex m-3 ml-0">
                                        <div className="">
                                            <img className="w-12 rounded-full bg-white" alt="error"
                                                src="/gamer-icon.png"/>
                                        </div>
                                        <div className="flex flex-col items-end ml-3 flex-1">
                                            <textarea className="outline-0 text-black rounded p-1.5 w-full"
                                                placeholder="Trả lời..."/>
                                            <button className="mt-1.5 bg-emerald-400 px-3 py-1 rounded
                                                hover:bg-emerald-500 transition-all w-fit">
                                                Đăng bình luận
                                            </button>
                                        </div>
                                    </div>
                                    {/* reply */}
                                    <div className="ml-12">
                                        <div className="flex m-3 ml-0">
                                            <div className="">
                                                <img className="w-12 rounded-full bg-white" alt="error"
                                                    src="/gamer-icon.png"/>
                                            </div>
                                            <div className="ml-3">
                                                <div className="flex items-center">
                                                    <span className="font-medium text-emerald-400 mr-2.5">Ngô Minh Quân</span>
                                                    <ClockIcon className="w-4 opacity-90 mr-1"/>
                                                    <span className="text-xs opacity-90">8 ngày trước</span>
                                                </div>
                                                <div>
                                                    <span>
                                                        cho mình hỏi bản coop nhẹ hơn bản chơi đơn thì nó có đầy đủ như bản đơn ko ạ. tks
                                                    </span>
                                                </div>
                                                <button className="mt-1.5 ml-1.5 flex items-center opacity-80 hover:opacity-100 transition-all">
                                                    <TrendingUpIcon className="w-5 mr-1"/>
                                                    <span className="text-sm">Trả lời</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex m-3 ml-0">
                                            <div className="">
                                                <img className="w-12 rounded-full bg-white" alt="error"
                                                    src="/gamer-icon.png"/>
                                            </div>
                                            <div className="ml-3">
                                                <div className="flex items-center">
                                                    <span className="font-medium text-emerald-400 mr-2.5">Ngô Minh Quân</span>
                                                    <ClockIcon className="w-4 opacity-90 mr-1"/>
                                                    <span className="text-xs opacity-90">8 ngày trước</span>
                                                </div>
                                                <div>
                                                    <span>
                                                        cho mình hỏi bản coop nhẹ hơn bản chơi đơn thì nó có đầy đủ như bản đơn ko ạ. tks
                                                    </span>
                                                </div>
                                                <button className="mt-1.5 ml-1.5 flex items-center opacity-80 hover:opacity-100 transition-all">
                                                    <TrendingUpIcon className="w-5 mr-1"/>
                                                    <span className="text-sm">Trả lời</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        {/* post side */}
                        <RelativeSoft soft={soft}/>
                    </div>
                </>
            }
            <Footer />
        </div>
    );
}

export default memo(DetailSoft);