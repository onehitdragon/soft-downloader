import { ChevronRightIcon } from "@heroicons/react/solid";
import Footer from "./footer/Footer";
import HeaderBar from "./headerbar/HeaderBar";
import HightestViewingArea from "./home/HightestViewingArea";
import MainMenu from "./main-menu/MainMenu";
import SlideBar from "./slidebar/SlideBar";

function Home(){
    return (
        <div className="mx-14 my-4 bg-slate-700 text-white">
            <HeaderBar />
            <MainMenu />
            <SlideBar />
            <HightestViewingArea />
            {/* title bar */}
            <div className="px-4 py-3 flex items-center">
                <div className="w-12 h-1.5 cursor-pointer bg-slate-600 mr-4 rounded"></div>
                <span className="mr-1 text-red-400 font-semibold text-lg">WINDOWS</span>
                <span className="font-semibold text-lg">11</span>
                <div className="flex-1 h-1.5 cursor-pointer bg-slate-600 ml-4 rounded"></div>
                {/*  */}
                <div className="flex items-center ml-5 mr-1 hover:text-red-400 transition-all
                    cursor-pointer">
                    <span className="font-bold text-sm">XEM TẤT CẢ</span>
                    <ChevronRightIcon className="w-7"/>
                </div>
            </div>
            {/* window11 */}
            <ul className="mx-2.5 my-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <li className="m-1.5">
                    <div className="relative">
                        <img alt="error"
                            src="https://lehait.net/wp-content/uploads/2022/09/Ghost.Win11.22H2.png?v=1664017085"
                            className="rounded cursor-pointer hover:scale-105 transition-all"/>
                        <div className="absolute bottom-1.5 right-1.5 flex justify-center items-center
                            px-2 py-1 rounded-full bg-white">
                            <span className="text-black font-medium">3.083</span>
                        </div>
                    </div>
                    <div className="text-sm">
                        <p className="text-lg max-w-full truncate
                            cursor-pointer font-medium mt-1 mb-1.5 hover:text-red-400 transition-all">
                            Ghost Win 11 22H2 – No & Full Soft, September 2022
                        </p>
                        <span className="text-base opacity-90">Thể loại: </span>
                        <span className="text-red-400 cursor-pointer hover:underline">Windows 11</span>
                        <span>, </span>
                        <span className="text-red-400 cursor-pointer hover:underline">Ghost Window 11</span>
                    </div>
                    <div className="mt-1 flex justify-between">
                        <button className="px-5 py-2.5 bg-slate-600 rounded hover:bg-red-400 transition-all
                            flex justify-center items-center">
                            <span className="text-xs font-medium">XEM</span>
                        </button>
                        <button className="w-40 bg-slate-600 rounded cursor-default
                            flex flex-col justify-center items-center">
                            <span className="text-xs font-medium">ĐÁNH GIÁ 100 ĐIỂM</span>
                            {/* range */}
                            <div className="h-2 w-28 mt-1 rounded bg-slate-400">
                                <div style={{ width: `${78}%` }} className="h-2 bg-red-400 rounded"></div>
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
            <Footer />
        </div>
    );
}

export default Home;