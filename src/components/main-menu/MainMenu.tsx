import { memo } from "react"

const MainMenu = () => {
    return (
        <>
            <hr className="opacity-40"/>
            <div className="px-3 py-2 flex items-center justify-between">
                <a href="/">
                    <img src="/soft downloader-1.png" alt="error"
                        className="h-12"/>
                </a>
                <div className="flex">
                    <div className="font-medium relative group cursor-pointer flex z-40">
                        <a className="uppercase hover:text-red-400 p-2 transition" href="/hdh">Hệ điều hành</a>
                        <div className="bg-slate-600 w-48 absolute top-full right-0
                            hidden group-hover:block text-sm">
                            <div className="flex p-2 items-center">
                                <img src="/windows11.png" className="w-6 h-6 mr-2" alt="error"/>
                                <a href="/" className="hover:text-red-400 flex-1 transition">Windows 11</a>
                            </div>
                            <div className="flex p-2 items-center">
                                <img src="/windows10.png" className="w-6 h-6 mr-2" alt="error"/>
                                <a href="/" className="hover:text-red-400 flex-1 transition">Windows 10</a>
                            </div>
                            <div className="flex p-2 items-center">
                                <img src="/windows8.png" className="w-6 h-6 mr-2" alt="error"/>
                                <a href="/" className="hover:text-red-400 flex-1 transition">Windows 8</a>
                            </div>
                            <div className="flex p-2 items-center">
                                <img src="/windows7.png" className="w-6 h-6 mr-2" alt="error"/>
                                <a href="/" className="hover:text-red-400 flex-1 transition">Windows 7</a>
                            </div>
                            <div className="flex p-2 items-center">
                                <img src="/windowsxp.png" className="w-6 h-6 mr-2" alt="error"/>
                                <a href="/" className="hover:text-red-400 flex-1 transition">Windows XP</a>
                            </div>
                        </div>
                    </div>
                    <div className="font-medium relative group cursor-pointer flex z-40">
                        <a className="uppercase hover:text-red-400 p-2 transition" href="/hdh">Phần mềm</a>
                        <div className="bg-slate-600 w-48 absolute top-full right-0
                            hidden group-hover:block text-sm">
                            <div className="flex p-2 items-center">
                                <img src="/coding-language.png" className="w-6 h-6 mr-2" alt="error"/>
                                <a href="/" className="hover:text-red-400 flex-1 transition">Code editor</a>
                            </div>
                            <div className="flex p-2 items-center">
                                <img src="/database.png" className="w-6 h-6 mr-2" alt="error"/>
                                <a href="/" className="hover:text-red-400 flex-1 transition">Database</a>
                            </div>
                            <div className="flex p-2 items-center">
                                <img src="/office.png" className="w-6 h-6 mr-2" alt="error"/>
                                <a href="/" className="hover:text-red-400 flex-1 transition">Office</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="opacity-40"/>
        </>
    );
}

export default memo(MainMenu);