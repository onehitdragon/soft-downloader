import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginThunk } from "../feature/profile/profileSlice";
import { RootState } from "../feature/store";
import Footer from "./footer/Footer";
import HeaderBar from "./headerbar/HeaderBar";
import NormalLoading from "./loading/NormalLoading";
import MainMenu from "./main-menu/MainMenu";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [logining, setLogining] = useState(false);
    const [lableButtonLogin, setLableButtonLogin] = useState("Đăng nhập");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        setLogining(true);
        setTimeout(() => {
            dispatch<any>(loginThunk(
                username,
                password,
                (result) => {
                    setLogining(false);
                    if(!result){
                        setLableButtonLogin("Sai tài khoản");
                    }
                    else{
                        navigate("/home");
                    }
                }
            ));
        }, 2500)
    }

    const user = useSelector<RootState, User | null>(state => state.profile.user);
    useEffect(() => {
        if(user !== null){
            navigate("/home");
        }
    }, [user, navigate])

    return (
        <div className="mx-14 my-4 bg-slate-700 text-white">
            <HeaderBar />
            <MainMenu />
            <div className="mx-4 my-3 flex items-center">
                <span className="text-2xl font-bold">
                    Đăng Nhập
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
                        <span className="font-medium mb-2">Mật khẩu<span className="opacity-80 ml-1"> *</span></span>
                        <input type="password" autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} value={password}
                            className="text-black px-2.5 py-1.5 outline-none rounded-sm bg-slate-50"/>
                    </div>
                    <div className="flex w-full my-1.5">
                        {
                            logining ?
                            <NormalLoading className="w-1/2 mr-2"/>
                            :
                            <button className="w-1/2 mr-1.5 bg-red-600 p-1.5 rounded font-medium hover:opacity-95"
                                onClick={(() => { handleLogin() })}>
                                    {lableButtonLogin}
                                </button>
                        }
                        <button className="w-1/2 ml-1.5 bg-red-600 p-1.5 rounded font-medium text-slate-400 hover:opacity-95">
                            Đăng ký</button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default memo(Login);