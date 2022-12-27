import { memo, useState } from "react"
import NormalButton from "../components/NormalButton";
import NormalTilteBar from "../components/NormalTilteBar";
import AddPostForm from "./AddPostForm";
import ViewAllPost from "./ViewAllPost";

enum PostMainView{
    ViewAllPost,
    AddPostForm
}

const PostMain = () => {
    const [curView, setCurView] = useState(PostMainView.ViewAllPost);

    return (
        <>
            <NormalTilteBar title="Bài viết"/>
            {
                curView !== PostMainView.ViewAllPost &&
                <div className="my-3">
                    <NormalButton label="Trở về"
                        handleOnClick={() => { setCurView(PostMainView.ViewAllPost) }} />
                </div>
            }
            {
                curView === PostMainView.ViewAllPost &&
                <div className="my-3">
                    <NormalButton label="Tạo bài viết"
                        handleOnClick={() => { setCurView(PostMainView.AddPostForm) }} />
                </div>
            }
            {
                curView === PostMainView.ViewAllPost &&
                <ViewAllPost />
            }
            {
                curView === PostMainView.AddPostForm &&
                <AddPostForm />
            }
        </>
    );
}

export default memo(PostMain);