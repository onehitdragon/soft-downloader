import { memo } from "react"
import { useNavigate } from "react-router";
import ListSubMenu from "./ListSubMenu";

const MainMenu = () => {
    const navigate = useNavigate();

    return (
        <>
            <hr className="opacity-40"/>
            <div className="px-3 py-2 flex items-center justify-between">
                <div onClick={(() => { navigate("/home") })} className="cursor-pointer">
                    <img src="/soft downloader-1.png" alt="error"
                        className="h-12"/>
                </div>
                <ListSubMenu />
            </div>
            <hr className="opacity-40"/>
        </>
    );
}

export default memo(MainMenu);