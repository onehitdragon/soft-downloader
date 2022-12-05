import { memo } from "react"
import ListSubMenu from "./ListSubMenu";

const MainMenu = () => {
    return (
        <>
            <hr className="opacity-40"/>
            <div className="px-3 py-2 flex items-center justify-between">
                <a href="/">
                    <img src="/soft downloader-1.png" alt="error"
                        className="h-12"/>
                </a>
                <ListSubMenu />
            </div>
            <hr className="opacity-40"/>
        </>
    );
}

export default memo(MainMenu);