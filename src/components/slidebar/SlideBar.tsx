import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { memo } from "react"

const SlideBar = () => {
    return (
        <div className="flex justify-center">
            <div className="px-4 py-6 max-w-fit relative">
                <img alt="error" src="https://infex-staging.sgp1.digitaloceanspaces.com/sp-standard/sp-demo/courses/images/windows-10.jpg"
                    className=""/>
                <hr className="border-none w-full h-1 bg-red-400"/>
                <button className="absolute bg-black rounded-full p-0.5 animate-pulse
                        top-1/2 -translate-y-1/2 -translate-x-1/2 shadow shadow-black bg-opacity-80">
                    <ChevronLeftIcon className="w-8 text-red-400"/>
                </button>
                <button className="absolute bg-black rounded-full p-0.5 animate-pulse
                        top-1/2 right-0 -translate-y-1/2 shadow shadow-black bg-opacity-80">
                    <ChevronRightIcon className="w-8 text-red-400"/>
                </button>
                <ul className="absolute left-1/2 flex -translate-x-1/2 -translate-y-4">
                    <li className="w-7 h-1.5 cursor-pointer mr-1 bg-red-400"></li>
                    <li className="w-7 h-1.5 bg-slate-400 cursor-pointer mr-1"></li>
                    <li className="w-7 h-1.5 bg-slate-400 cursor-pointer mr-1"></li>
                    <li className="w-7 h-1.5 bg-slate-400 cursor-pointer mr-1"></li>
                </ul>
            </div>
        </div>
    );
}

export default memo(SlideBar);