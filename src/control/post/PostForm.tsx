import { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk, updateCurCategory, updateCurChildCategory, updateTitle } from "../../feature/control/controlPost/PostFormSlice";
import { RootState } from "../../feature/store";
import NormalButton from "../components/NormalButton";
import NormalInput from "../components/NormalInput";
import NormalOption from "../components/NormalOption";
import PostContentModifer from "./ContentModify/PostContentModifer";

const PostForm = ({ onSubmit }: { onSubmit: Function }) => {
    const titlePost = useSelector<RootState, string>(state => state.postForm.title);
    const curSelectCategory = useSelector<RootState, Category | null>(state => state.postForm.curCategory);
    const curSelectChildCategory = useSelector<RootState, ChildCategory | null>(state => state.postForm.curChildCategory);
    const categories = useSelector<RootState, Category[] | null>(state => state.control.categories);
    const isAdd = useSelector<RootState, boolean>(state => state.postForm.isAdd);
    const dispatch = useDispatch();

    return (
        (categories === null || curSelectCategory === null || curSelectChildCategory === null) ?
        <></>
        :
        (
            <div className="flex flex-col">
                <span className="font-medium my-2">Tiêu đề bài viết<span className="opacity-80 ml-1"> *</span></span>
                <NormalInput placeholder="Tiêu đề"
                    value={titlePost}
                    onChange={(v) => { dispatch(updateTitle(v)) }}/>
                <span className="font-medium my-2">Nội dung<span className="opacity-80 ml-1"> *</span></span>
                <PostContentModifer />
                <span className="font-medium my-2">Chọn thể loại<span className="opacity-80 ml-1"> *</span></span>
                <div className="flex my-2">
                    <NormalOption listItem={categories}
                        selectItem={curSelectCategory}
                        print={(i) => {
                            return (i as Category).name;
                        }}
                        handleOnSelected={(i) => {
                            dispatch(updateCurCategory(i as Category));
                            dispatch(updateCurChildCategory((i as Category).childCategories[0]));
                        }}/>
                    <div className="mx-1.5"></div>
                    <NormalOption listItem={curSelectCategory.childCategories}
                        selectItem={curSelectChildCategory}
                        print={(i) => {
                            return (i as ChildCategory).name;
                        }}
                        handleOnSelected={(i) => {
                            dispatch(updateCurChildCategory((i as ChildCategory)));
                        }}
                    />
                </div>
                {
                    isAdd ?
                    <NormalButton label="Tạo bài viết"
                        handleOnClick={() => {
                            dispatch<any>(createPostThunk(
                                titlePost,
                                curSelectChildCategory.id,
                                () => { 
                                    onSubmit();
                                }
                            ));
                        }}
                    />
                    :
                    <NormalButton label="Sửa bài viết"
                        handleOnClick={() => { 
                            
                        }}
                    />
                }
            </div>
        )
    );
}

export default memo(PostForm);