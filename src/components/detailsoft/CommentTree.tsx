import { memo } from "react";
import CommentTreeItem from "./CommentTreeItem";

const CommentTree = ({ comments }: { comments: SoftComment[] }) => {
    return (
        <div className="bg-black p-4">
            {/*  */}
            <div className="flex items-center">
                <span className="text-2xl font-bold">
                    BÌNH LUẬN
                </span>
                <div className="flex-1 h-1 cursor-pointer bg-red-400 ml-4 rounded"></div>
            </div>
            {/* reply form */}
            <div className="flex m-3 ml-0">
                <div className="">
                    <img className="w-12 rounded-full bg-white" alt="error"
                        src="/gamer-icon.png"/>
                </div>
                <div className="flex flex-col items-end ml-3 flex-1">
                    <textarea className="outline-0 text-black rounded p-1.5 w-full"
                        placeholder="Viết bình luận..."/>
                    <button className="mt-1.5 bg-emerald-400 px-3 py-1 rounded
                        hover:bg-emerald-500 transition-all w-fit">
                        Đăng bình luận
                    </button>
                </div>
            </div>
            <hr className="opacity-40"/>
            {
                comments.map((comment) => {
                    return (
                        <CommentTreeItem key={comment.id} comment={comment} level={1}/>
                    );
                })
            }
        </div>
    );
}

export default memo(CommentTree);