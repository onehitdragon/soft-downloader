import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk } from "../../feature/control/controlSlice";
import { RootState } from "../../feature/store";
import NormalButton from "../components/NormalButton";
import NormalInput from "../components/NormalInput";
import NormalOption from "../components/NormalOption";
import PostContentModifer from "./ContentModify/PostContentModifer";

const AddPostForm = () => {
    const [titlePost, setTitlePost] = useState("");
    const categories = useSelector<RootState, Category[] | null>(state => state.control.categories);
    const [curSelectCategory, setCurSelectCategory] = useState<Category | null>(null);
    const [curSelectChildCategory, setCurSelectChildCategory] = useState<ChildCategory | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(categories === null) return;
        setCurSelectCategory(categories[0]);
        setCurSelectChildCategory(categories[0].childCategories[0]);
    }, [categories]);

    return (
        (categories === null || curSelectCategory === null || curSelectCategory === null) ?
        <></>
        :
        (
            <div className="flex flex-col">
                <span className="font-medium my-2">Tiêu đề bài viết<span className="opacity-80 ml-1"> *</span></span>
                <NormalInput placeholder="Tiêu đề"
                    value={titlePost}
                    onChange={(v) => { setTitlePost(v) }}/>
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
                            setCurSelectCategory(i as Category);
                            setCurSelectChildCategory((i as Category).childCategories[0]);
                        }}/>
                    <div className="mx-1.5"></div>
                    <NormalOption listItem={curSelectCategory.childCategories}
                        selectItem={curSelectChildCategory}
                        print={(i) => {
                            return (i as ChildCategory).name;
                        }}
                        handleOnSelected={(i) => {
                            setCurSelectChildCategory(i as ChildCategory);
                        }}
                    />
                </div>
                <NormalButton label="Tạo bài viết"
                    handleOnClick={() => { 
                        dispatch<any>(createPostThunk(
                            titlePost,
                            () => {  }
                        ));
                    }}
                />
            </div>
        )
    );
}

export default memo(AddPostForm);