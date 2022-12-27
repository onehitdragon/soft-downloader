import { memo, useState } from "react"
import NormalInput from "../components/NormalInput";
import PostContentModifer from "./ContentModify/PostContentModifer";

const AddPostForm = () => {
    const [titlePost, setTitlePost] = useState("");

    return (
        <div className="flex flex-col">
            <span className="font-medium my-2">Tiêu đề bài viết<span className="opacity-80 ml-1"> *</span></span>
            <NormalInput placeholder="Tiêu đề"
                value={titlePost}
                onChange={(v) => { setTitlePost(v) }}/>
            <span className="font-medium my-2">Nội dung<span className="opacity-80 ml-1"> *</span></span>
            <PostContentModifer />
        </div>
    );
}

export default memo(AddPostForm);