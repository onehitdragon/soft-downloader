import { BellIcon } from "@heroicons/react/solid";
import { memo } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../feature/store";
import NotificationPopup from "../notification/NotificationPopup";
import SeachBar from "../searchbar/SeachBar";

const HeaderBar = () => {
    const navigate = useNavigate();
    const user = useSelector<RootState, User | null>(state => state.profile.user);

    return (
        <div className="px-3 py-2 flex items-center justify-between">
            <div className="text-sm">
                <a href="https://myvonlinechat.herokuapp.com"
                    className="text-red-400 hover:underline">Web chat</a> nhắn tin, gọi video
            </div>
            <SeachBar />
            <div className="flex items-center text-sm uppercase font-medium relative">
                <button className="w-7 h-7 flex items-center justify-center z-0
                    relative after:top-0 after:left-0 after:bg-slate-400 after:w-full after:h-full after:-z-10
                    after:absolute after:rounded-full">
                    <BellIcon className="w-5 hover:text-red-400 transition"/>
                </button>
                {/* <NotificationPopup /> */}
                {
                    user === null ?
                    <>
                        <span className="hover:underline hover:text-red-400 transition mx-2 cursor-pointer"
                            onClick={() => { navigate("/login") }}>Đăng nhập</span>
                        <span className="hover:underline hover:text-red-400 transition cursor-pointer"
                            onClick={() => { navigate("/register") }}>Đăng ký</span>
                    </>
                    :
                    <span className="mx-2 normal-case">
                        Chào, <span className="text-red-400">{user.fullName}</span>
                    </span>
                }
            </div>
        </div>
    );
}

export default memo(HeaderBar);