import { BellIcon } from "@heroicons/react/solid";
import { memo } from "react"
import NotificationPopup from "../notification/NotificationPopup";
import SeachBar from "../searchbar/SeachBar";

const HeaderBar = () => {
    return (
        <div className="px-3 py-2 flex items-center justify-between">
            <div className="text-sm">
                <a href="https://myvonlinechat.herokuapp.com"
                    className="text-red-400 hover:underline">Web chat</a> nhắn tin, gọi video
            </div>
            {/* <SeachBar /> */}
            <div className="flex items-center text-sm uppercase font-medium relative">
                <button className="w-7 h-7 flex items-center justify-center z-0
                    relative after:top-0 after:left-0 after:bg-slate-400 after:w-full after:h-full after:-z-10
                    after:absolute after:rounded-full">
                    <BellIcon className="w-5 hover:text-red-400 transition"/>
                </button>
                {/* <NotificationPopup /> */}
                <a href="/login" className="hover:underline hover:text-red-400 transition mx-2">Đăng nhập</a>
                <a href="/register" className="hover:underline hover:text-red-400 transition">Đăng ký</a>
            </div>
        </div>
    );
}

export default memo(HeaderBar);