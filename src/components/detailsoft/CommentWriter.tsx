import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../feature/store";

const CommentWriter = ({ handleWhenComment }: { handleWhenComment: (commenterId: number, content: string) => any }) => {
    const [content, setContent] = useState("");
    const user = useSelector<RootState, User | null>(state => state.profile.user);
    const navigate = useNavigate();

    return (
        user === null ?
        <div className="flex m-3 ml-0 justify-center">
            <span className="opacity-80">Vui lòng&nbsp;
            <span className="cursor-pointer text-red-400 hover:underline"
                onClick={() => { navigate("/login") }}>đăng nhập</span>
            &nbsp;để bình luận</span>
        </div>
        :
        <div className="flex m-3 ml-0">
            <div className="">
                <img className="w-12 rounded-full bg-white" alt="error"
                    src="/gamer-icon.png"/>
            </div>
            <div className="flex flex-col items-end ml-3 flex-1">
                <textarea className="outline-0 text-black rounded p-1.5 w-full"
                    placeholder="Viết bình luận..." value={content}
                    onChange={(e) => { setContent(e.target.value) }}/>
                <button className="mt-1.5 bg-emerald-400 px-3 py-1 rounded
                    hover:bg-emerald-500 transition-all w-fit"
                    onClick={() => { handleWhenComment(user.id, content) }}>
                    Đăng bình luận
                </button>
            </div>
        </div>
    );
}

export default memo(CommentWriter);