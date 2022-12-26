import { memo, useState } from "react";
import { ClockIcon, TrendingUpIcon, ChatAlt2Icon} from "@heroicons/react/outline";
import { compareDateToPast } from "../../util/convert";
import CommentWriter from "./CommentWriter";

const CommentTreeItem = ({ comment, level, parentComment, handleWhenReply }: { comment: SoftComment, level: number, parentComment?: SoftComment, handleWhenReply: (commenterId: number, content: string, receivedCommentId: number) => any} ) => {
    const [showingCommenterWriter, setShowingCommenterWriter] = useState(false);
    
    return (
        <div>
            <div className="flex m-3 ml-0">
                <div className="min-w-fit">
                    <img className="w-12 rounded-full bg-white" alt="error"
                        src="/gamer-icon.png"/>
                </div>
                <div className="ml-3">
                    <div className="flex items-center">
                        <span className="font-medium text-emerald-400 mr-2.5">
                            { comment.commenter.fullName }
                        </span>
                        <ClockIcon className="w-4 opacity-90 mr-1"/>
                        <span className="text-xs opacity-90">
                            { compareDateToPast(new Date(comment.createDate)) }
                        </span>
                    </div>
                    {
                        level > 3 &&
                        <div className="flex my-1">
                            <span style={{ width: "1px" }}
                                className="h-5 bg-white mr-1.5"></span>
                            <ChatAlt2Icon className="w-4 opacity-80 mr-1.5"/>
                            <span className="opacity-80 italic text-sm mr-1.5">Trả lời đến</span>
                            <span className="text-emerald-400 text-sm">
                                { parentComment!.commenter.fullName }
                            </span>
                        </div>
                    }
                    <div>
                        <span>
                            { comment.content }
                        </span>
                    </div>
                    <button className="mt-1.5 ml-1.5 flex items-center opacity-80 hover:opacity-100 transition-all"
                        onClick={(() => { setShowingCommenterWriter(true) })}>
                        <TrendingUpIcon className="w-5 mr-1"/>
                        <span className="text-sm">Trả lời</span>
                    </button>
                </div>
            </div>
            {
                showingCommenterWriter &&
                <CommentWriter handleWhenComment={
                    (commenterId, content) => { 
                        handleWhenReply(commenterId, content, comment.id);
                        setShowingCommenterWriter(false);
                    }
                }/>
            }
            {/* reply */}
            <div className={level <= 3 ? "ml-12" : ""}>
                {
                    comment.replyComments !== null &&
                    comment.replyComments.map((replyComment) => {
                        return (
                            <CommentTreeItem key={replyComment.id}
                                comment={replyComment}
                                level={level+1}
                                parentComment={comment}
                                handleWhenReply={handleWhenReply}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default memo(CommentTreeItem);