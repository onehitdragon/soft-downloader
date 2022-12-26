import { memo } from "react"
import NormalTilteBar from "../components/NormalTilteBar";
import ViewAllPost from "./ViewAllPost";

const PostMain = () => {
    return (
        <>
            <NormalTilteBar title="Bài viết"/>
            <ViewAllPost />
        </>
    );
}

export default memo(PostMain);