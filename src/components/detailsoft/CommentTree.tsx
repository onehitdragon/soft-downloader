import { memo } from "react";
import CommentTreeItem from "./CommentTreeItem";
import CommentWriter from "./CommentWriter";

const CommentTree = ({ comments, handleWhenComment, handleWhenReply }: { comments: SoftComment[], handleWhenComment: (commenterId: number, content: string) => any , handleWhenReply: (commenterId: number, content: string, receivedCommentId: number) => any}) => {
    return (
        <div className="bg-black p-4">
            {/*  */}
            <div className="flex items-center">
                <span className="text-2xl font-bold">
                    BÌNH LUẬN
                </span>
                <div className="flex-1 h-1 cursor-pointer bg-red-400 ml-4 rounded"></div>
            </div>
            <CommentWriter handleWhenComment={handleWhenComment}/>
            <hr className="opacity-40"/>
            {
                comments.map((comment) => {
                    return (
                        <CommentTreeItem key={comment.id} comment={comment} level={1} 
                            handleWhenReply={handleWhenReply}/>
                    );
                })
            }
        </div>
    );
}

export default memo(CommentTree);