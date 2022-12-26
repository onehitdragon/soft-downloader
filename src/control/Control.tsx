import { memo, useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../feature/store";
import ControlBody from "./ControlBody";
import ControlMenu from "./ControlMenu";

const Control = () => {
    const user = useSelector<RootState, User | null>(state => state.profile.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(user === null || user.role.name === "User"){
            navigate("/home");
        }
    }, [user, navigate])

    return (
        user === null ?
        <></>
        :
        <div className="mx-14 my-4 bg-slate-700 text-white flex">
            {/* left side */}
            <div className="w-60 min-w-fit">
                {/* profile */}
                <div className="flex flex-col p-5 items-center cursor-default">
                    <img className="w-16 rounded-full bg-white" alt="error"
                        src="/gamer-icon.png"/>
                    <span className="mt-2.5 text-red-400 font-medium">Nguyễn Văn Admin</span>
                    <span className="opacity-80 text-sm">@Admin</span>
                </div>
                <ControlMenu />
            </div>
            <ControlBody />
        </div>
    );
}

export default memo(Control);