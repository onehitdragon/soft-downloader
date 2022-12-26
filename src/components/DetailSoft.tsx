import { ChatAlt2Icon, FireIcon } from "@heroicons/react/solid";
import { memo, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "./footer/Footer";
import HeaderBar from "./headerbar/HeaderBar";
import MainMenu from "./main-menu/MainMenu";
import api from "../util/api";
import { convertDateToString, numberToFloat } from "../util/convert";
import ContentSoft from "./detailsoft/ContentSoft";
import RelativeSoft from "./detailsoft/RelativeSoft";
import CommentTree from "./detailsoft/CommentTree";
import { findCommentById } from "../util/commentUtil";

const DetailSoft = () => {
    const idSoft = useLoaderData();
    const [soft, setSoft] = useState<Soft | null>(null);
    const [comments, setComments] = useState<SoftComment[] | null>(null);

    useEffect(() => {
        api.get(`/soft/${idSoft}`)
        .then((res) => {
            return res?.json();
        })
        .then((soft: Soft) => {
            soft.content = (soft.content as any).replaceAll("\\", "\\\\");
            soft.content = JSON.parse(soft.content as any);
            setSoft(soft);
        })
        .catch((err) => {
            console.log(err);
        })

        api.put(`/soft/addViewingSoft/${idSoft}`)
        .catch((err) => {
            console.log(err);
        })

        api.get(`/comment/getall/${idSoft}`)
        .then((res) => {
            return res?.json();
        })
        .then((comments: SoftComment[]) => {
            setComments(comments);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [idSoft]);

    const handleWhenComment = (commenterId: number, content: string) => {
        const formData = new FormData();
        formData.append("commenterId", commenterId + "");
        formData.append("content", content!);
        api.postFile(`/comment/to/${idSoft}`, formData)
        .then((res) => {
            return res?.json();
        })
        .then((data: { status: "success" | "error", option: SoftComment}) => {
            setComments(comments => {
                if(comments === null) return [data.option];
                return [data.option, ...comments]
            });
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleWhenReply = (commenterId: number, content: string, receivedCommentId: number) => {
        const formData = new FormData();
        formData.append("commenterId", commenterId + "");
        formData.append("content", content!);
        formData.append("receivedCommentId", receivedCommentId + "");
        api.postFile(`/comment/replyto/${idSoft}`, formData)
        .then((res) => {
            return res?.json();
        })
        .then((data: { status: "success" | "error", option: SoftComment}) => {
            setComments(comments => {
                if(comments === null) return null;
                const receivedComment = findCommentById(receivedCommentId, comments);
                if(typeof receivedComment !== "undefined"){
                    if(receivedComment.replyComments === null){
                        receivedComment.replyComments = [data.option];
                    }
                    else{
                        receivedComment.replyComments = [data.option, ...receivedComment.replyComments];
                    }
                }
                return [...comments];
            });
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="mx-14 my-4 bg-slate-700 text-white">
            <HeaderBar />
            <MainMenu />
            {
                soft === null ?
                <div className="mx-4 my-3">Đang tải...</div> :
                <>
                    <div className="mx-4 my-3 flex items-center">
                        <span className="text-2xl font-bold">
                            {soft.title}
                        </span>
                        <div className="flex-1 h-1 cursor-pointer bg-red-400 ml-4 rounded"></div>
                    </div>
                    <div className="mx-4 my-3 flex items-center">
                        <span className="mr-1.5 opacity-90">Bởi</span>
                        <span className="text-sm font-medium">{soft?.author.fullName}</span>
                        <span className="mx-2">-</span>
                        <span className="mr-1.5 opacity-90">Cập nhật</span>
                        <span className="text-sm font-medium">
                            {convertDateToString(new Date(soft.createDate))}
                        </span>
                        <span className="mx-2">-</span>
                        <div className="flex text-red-400">
                            <FireIcon className="w-5"/>
                            <span>{numberToFloat(soft.amountView)}</span>
                        </div>
                        <span className="mx-2">-</span>
                        <div className="flex">
                            <ChatAlt2Icon className="w-5"/>
                            <span>127</span>
                        </div>
                    </div>
                    <div className="mx-4 my-3 flex">
                        <div className="w-full">
                            <ContentSoft content={soft.content}/>
                            {
                                comments !== null &&
                                <CommentTree 
                                    comments={comments}
                                    handleWhenComment={handleWhenComment}
                                    handleWhenReply={handleWhenReply}/>
                            }
                        </div>
                        <RelativeSoft soft={soft}/>
                    </div>
                </>
            }
            <Footer />
        </div>
    );
}

export default memo(DetailSoft);