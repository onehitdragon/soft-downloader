import { memo, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registerThunk } from "../feature/profile/profileSlice";
import Footer from "./footer/Footer";
import HeaderBar from "./headerbar/HeaderBar";
import NormalLoading from "./loading/NormalLoading";
import MainMenu from "./main-menu/MainMenu";

const Register = () => {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [registing, setRegisting] = useState(false);
    const [lableButtonRegister, setLableButtonRegister] = useState("Đăng ký");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = () => {
        setRegisting(true);
        setTimeout(() => {
            dispatch<any>(registerThunk(username, password, fullname,
                (result) => {
                    if(!result){
                        setLableButtonRegister("Tài khoản tồn tại");
                        setRegisting(false);
                    }
                    else{
                        navigate("/home");
                    }
                }));
        }, 2500);
    }

    return (
        <div className="mx-14 my-4 bg-slate-700 text-white">
            <HeaderBar />
            <MainMenu />
            <div className="mx-4 my-3 flex items-center">
                <span className="text-2xl font-bold">
                    Đăng Ký
                </span>
                <div className="flex-1 h-1 cursor-pointer bg-red-400 ml-4 rounded"></div>
            </div>
            <form className="mx-4 my-3 flex justify-center">
                <div className="flex flex-col w-96">
                    <div className="flex flex-col w-full my-1.5">
                        <span className="font-medium mb-2">Tên tài khoản hoặc Email<span className="opacity-80 ml-1"> *</span></span>
                        <input type="text" onChange={(e) => { setUsername(e.target.value) }} value={username}
                            className="text-black px-2.5 py-1.5 outline-none rounded-sm bg-slate-50"/>
                    </div>
                    <div className="flex flex-col w-full my-1.5">
                        <span className="font-medium mb-2">Tên bạn<span className="opacity-80 ml-1"> *</span></span>
                        <input type="text" onChange={(e) => { setFullname(e.target.value) }} value={fullname}
                            className="text-black px-2.5 py-1.5 outline-none rounded-sm bg-slate-50"/>
                    </div>
                    <div className="flex flex-col w-full my-1.5">
                        <span className="font-medium mb-2">Mật khẩu<span className="opacity-80 ml-1"> *</span></span>
                        <input type="password" autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} value={password}
                            className="text-black px-2.5 py-1.5 outline-none rounded-sm bg-slate-50"/>
                    </div>
                    <div className="flex w-full my-1.5">
                        {
                            registing ?
                            <NormalLoading className="w-1/2 mr-2"/>
                            :
                            <button className="w-1/2 mr-1.5 bg-red-600 p-1.5 rounded font-medium hover:opacity-95"
                                onClick={(() => { handleRegister() })}>
                                    {lableButtonRegister}
                            </button>
                        }
                        <button className="w-1/2 ml-1.5 bg-red-600 p-1.5 rounded font-medium text-slate-400 hover:opacity-95"
                            onClick={() => { navigate("/login") }}>
                            Đăng nhập</button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default memo(Register);