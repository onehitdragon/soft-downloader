import { memo, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateModifierContent } from "../../feature/control/controlPost/PostContentModiferSlice";
import { updateCurCategory, updateCurChildCategory, updateIsAdd, updateTitle } from "../../feature/control/controlPost/PostFormSlice";
import { RootState } from "../../feature/store";
import NormalButton from "../components/NormalButton";
import NormalTilteBar from "../components/NormalTilteBar";
import PostForm from "./PostForm";
import ViewAllPost from "./ViewAllPost";

enum PostMainView{
    ViewAllPost,
    PostForm
}

const PostMain = () => {
    const [curView, setCurView] = useState(PostMainView.ViewAllPost);
    const categories = useSelector<RootState, Category[] | null>(state => state.control.categories);
    const dispatch = useDispatch();

    const handleAddPost = () => {
        if (categories === null) return;
        dispatch(updateTitle(""));
        dispatch(updateModifierContent([]));
        dispatch(updateCurCategory(categories[0]));
        dispatch(updateCurChildCategory(categories[0].childCategories[0]));
        dispatch(updateIsAdd(true));
    }

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
                        handleOnClick={() => {
                            handleAddPost();
                            setCurView(PostMainView.PostForm) 
                        }} />
                </div>
            }
            {
                curView === PostMainView.ViewAllPost &&
                <ViewAllPost onModify={() => {
                    setCurView(PostMainView.PostForm);
                }}/>
            }
            {
                curView === PostMainView.PostForm &&
                <PostForm onSubmit={() => {
                    setCurView(PostMainView.ViewAllPost);
                }}/>
            }
        </>
    );
}

export default memo(PostMain);