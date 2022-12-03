import { BellIcon, ChatAlt2Icon, ChevronRightIcon, FireIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon } from "@heroicons/react/outline";

function Home(){
    return (
        <div className="mx-14 my-4 bg-slate-700 text-white">
            {/* header bar */}
            <div className="px-3 py-2 flex items-center justify-between">
                <div className="text-sm">
                    <a href="https://myvonlinechat.herokuapp.com"
                        className="text-red-400 hover:underline">Web chat</a> nhắn tin, gọi video
                </div>
                <div className="flex-1 mx-2 max-w-lg relative">
                    <input className="w-full px-2.5 py-1.5 text-base text-black outline-none" placeholder="Tìm kiếm gì đó..."/>
                    {/* search bar */}
                    {/* <div className="bg-slate-900 absolute w-full mt-1 z-50">
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
                <div className="flex items-center text-sm uppercase font-medium relative">
                    <button className="w-7 h-7 flex items-center justify-center z-0
                        relative after:top-0 after:left-0 after:bg-slate-400 after:w-full after:h-full after:-z-10
                        after:absolute after:rounded-full">
                        <BellIcon className="w-5 hover:text-red-400 transition"/>
                    </button>
                    {/* notification */}
                    {/* <div className="absolute top-full right-full translate-x-10 mt-2 w-80 bg-slate-600 p-3 cursor-default z-50">
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
            <hr className="opacity-40"/>
            {/* slice bar */}
            <div className="flex justify-center relative">
                <div className="px-4 py-6 max-w-fit">
                    <img alt="error" src="https://infex-staging.sgp1.digitaloceanspaces.com/sp-standard/sp-demo/courses/images/windows-10.jpg"
                        className=""/>
                    <hr className="border-none w-full h-1 bg-red-400"/>
                    <button className="absolute bg-black rounded-full p-0.5
                            top-1/2 -translate-y-1/2 -translate-x-1/2 shadow shadow-black bg-opacity-80">
                        <ChevronLeftIcon className="w-8 text-red-400"/>
                    </button>
                    <button className="absolute bg-black rounded-full p-0.5
                            top-1/2 right-0 -translate-y-1/2 translate-x-1 shadow shadow-black bg-opacity-80">
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
            {/* title bar */}
            <div className="px-4 py-3 flex items-center">
                <div className="w-12 h-1.5 cursor-pointer bg-slate-600 mr-4 rounded"></div>
                <span className="mr-1 text-red-400 font-semibold text-lg">MỚI</span>
                <span className="font-semibold text-lg">NHẤT</span>
                <div className="w-full h-1.5 cursor-pointer bg-slate-600 ml-4 rounded"></div>
            </div>
            {/* new area */}
            <div className="mx-4 my-3 p-1 pr-0 pb-0 flex bg-slate-600">
                <div style={{ minWidth: '24rem' }} className="flex-1">
                    <img alt="error"
                        src="https://lehait.net/wp-content/uploads/2022/10/Ghost.Win10.22H2-750x430.png"
                        className="w-96 h-44"/>
                    <p className="my-2 text-red-400 cursor-pointer hover:underline font-medium">
                        Ghost Win 10 22H2 Home SL & Pro - No & Full Soft, Update October 2022
                    </p>
                    <div className="flex items-center opacity-90">
                        <span>Admin</span>
                        <span className="h-1 w-1 rounded-full bg-slate-400 mx-1.5"></span>
                        <span>23 Th10, 2022</span>
                        <div className="flex ml-2 text-red-400">
                            <FireIcon className="w-5"/>
                            <span>27.289</span>
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex">
                            <ChatAlt2Icon className="w-5"/>
                            <span>127</span>
                        </div>
                    </div>
                </div>
                <ul className="w-auto">
                    <li className="flex flex-col hover:bg-slate-400 group cursor-pointer transition-all">
                        <div className="flex p-2">
                            <img alt="error" src="https://lehait.net/wp-content/uploads/2022/07/Ghost.Win10.Pro_.21H2-86x64.jpg"
                                className="mr-3"/>
                            <div className="">
                                <span className="hover:underline font-medium">
                                    Ghost Win 10 Pro 21H2 - No & Full Soft, Update July 2022
                                </span>
                                <div className="flex justify-between opacity-90">
                                    <span>23 Th10, 2022</span>
                                    <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                        <FireIcon className="w-5"/>
                                        <span>27.289</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-slate-400"/>
                    </li>
                    <li className="flex flex-col hover:bg-slate-400 group cursor-pointer transition-all">
                        <div className="flex p-2">
                            <img alt="error" src="https://lehait.net/wp-content/uploads/2022/07/Ghost.Win10.Pro_.21H2-86x64.jpg"
                                className="mr-3"/>
                            <div className="">
                                <span className="hover:underline font-medium">
                                    Ghost Win 10 Pro 21H2 - No & Full Soft, Update July 2022
                                </span>
                                <div className="flex justify-between opacity-90">
                                    <span>23 Th10, 2022</span>
                                    <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                        <FireIcon className="w-5"/>
                                        <span>27.289</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-slate-400"/>
                    </li>
                    <li className="flex flex-col hover:bg-slate-400 group cursor-pointer transition-all">
                        <div className="flex p-2">
                            <img alt="error" src="https://lehait.net/wp-content/uploads/2022/07/Ghost.Win10.Pro_.21H2-86x64.jpg"
                                className="mr-3"/>
                            <div className="">
                                <span className="hover:underline font-medium">
                                    Ghost Win 10 Pro 21H2 - No & Full Soft, Update July 2022
                                </span>
                                <div className="flex justify-between opacity-90">
                                    <span>23 Th10, 2022</span>
                                    <div className="flex ml-2 text-red-400 group-hover:text-red-700">
                                        <FireIcon className="w-5"/>
                                        <span>27.289</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-slate-400"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;