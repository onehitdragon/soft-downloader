import { BellIcon } from "@heroicons/react/solid";

function Home(){
    return (
        <div className="mx-7 my-4 bg-slate-700 text-white">
            {/* header bar */}
            <div className="px-3 py-2 flex items-center justify-between">
                <div className="text-sm">
                    <a href="https://myvonlinechat.herokuapp.com"
                        className="text-red-400 hover:underline">Web chat</a> nhắn tin, gọi video
                </div>
                <div className="flex-1 mx-2 max-w-lg relative">
                    <input className="w-full px-2.5 py-1.5 text-base text-black outline-none" placeholder="Tìm kiếm gì đó..."/>
                    {/* <div className="bg-slate-900 absolute w-full mt-1">
                        <div className="flex cursor-pointer p-3 group">
                            <img src="/wd.jpeg" className="h-24"/>
                            <div className="flex flex-col justify-between ml-2 overflow-hidden">
                                <span className="text-ellipsis line-clamp-1 text-red-500 font-medium
                                    group-hover:text-red-300 transition-colors">
                                    Ghost Windows 10 (x64 + x86) 21H1  No Full Soft, Bamboo Aug 2021
                                </span>
                                <span className="text-ellipsis line-clamp-3 text-sm">
                                    Mới đây, một bản Ghost Windows 10 21H1 với chủ đề Bamboo (tre xanh) được ra mắt đến những bạn nào đang quan tâm ghoster Lehait. Từng bản ghost mà tác giả chia sẻ là một sản phẩm cực kì chất
                                </span>
                            </div>
                        </div>
                        <div className="flex cursor-pointer p-3 group">
                            <img src="/wd.jpeg" className="h-24"/>
                            <div className="flex flex-col justify-between ml-2 overflow-hidden">
                                <span className="text-ellipsis line-clamp-1 text-red-500 font-medium
                                    group-hover:text-red-300 transition-colors">
                                    Ghost Windows 10 (x64 + x86) 21H1  No Full Soft, Bamboo Aug 2021
                                </span>
                                <span className="text-ellipsis line-clamp-3 text-sm">
                                    Mới đây, một bản Ghost Windows 10 21H1 với chủ đề Bamboo (tre xanh) được ra mắt đến những bạn nào đang quan tâm ghoster Lehait. Từng bản ghost mà tác giả chia sẻ là một sản phẩm cực kì chất
                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="flex items-center text-sm uppercase font-medium">
                    <button className="w-7 h-7 flex items-center justify-center z-0
                        relative after:top-0 after:left-0 after:bg-slate-400 after:w-full after:h-full after:-z-10
                        after:absolute after:rounded-full">
                        <BellIcon className="w-5 hover:text-red-400 transition"/>
                        {/* <div className="absolute top-full right-0 mt-2 w-80 bg-slate-600 p-3 cursor-default">
                            <div className="flex flex-col text-left">
                                <span className="text-base">
                                    Chúng tôi không chịu trách nhiệm về nội dung đăng tải do người dùng đưa lên và sẵn sàng tháo bỏ những nội dung vi phạm.
                                </span>
                                <span className="mt-1 text-sm text-slate-300">
                                    09/08/2022
                                </span>
                                <hr className="my-1"/>
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-base">
                                    Chúng tôi không chịu trách nhiệm về nội dung đăng tải do người dùng đưa lên và sẵn sàng tháo bỏ những nội dung vi phạm.
                                </span>
                                <span className="mt-1 text-sm text-slate-300">
                                    09/08/2022
                                </span>
                                <hr className="my-1"/>
                            </div>
                        </div> */}
                    </button>
                    <a href="/login" className="hover:underline hover:text-red-400 transition mx-2">Đăng nhập</a>
                    <a href="/register" className="hover:underline hover:text-red-400 transition">Đăng ký</a>
                </div>
            </div>
            <hr className="opacity-40"/>
            {/* Menu */}
            <div className="px-3 py-2 flex items-center justify-between">
                <a href="/">
                    <img src="/soft downloader-1.png" alt="error"
                        className="h-12"/>
                </a>
                <div className="flex">
                    <div className="font-medium relative group cursor-pointer flex">
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
                    <div className="font-medium relative group cursor-pointer flex">
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
        </div>
    );
}

export default Home;