import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { PostFormState } from "..";
import api from "../../../util/api";
import { RootState } from "../../store";

const init: PostFormState = {
    title: "",
    curCategory: null,
    curChildCategory: null,
    isAdd: true
}

const PostFormSlice = createSlice({
    name: "PostFormSlice",
    initialState: init,
    reducers: {
        updateTitle: (state, action: { payload: string }) => {
            state.title = action.payload;
        },
        updateCurCategory: (state, action: { payload: Category }) => {
            state.curCategory = action.payload;
        },
        updateCurChildCategory: (state, action: { payload: ChildCategory }) => {
            state.curChildCategory = action.payload;
        },
        updateIsAdd: (state, action: { payload: boolean }) => {
            state.isAdd = action.payload;
        },
    }
});

export default PostFormSlice.reducer;
export const { updateTitle, updateCurCategory, updateCurChildCategory, updateIsAdd } = PostFormSlice.actions;

function createPostThunk(title: string, childCategoryId: number, whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        const formData = new FormData();
        formData.append("title", title);
        const contents: (TitleElement | TextElement | ParaElement | ListElement | ImageElement)[] = getState().postModifierContent.modifierContent.map((e) => {
            if(e.type === "image"){
                formData.append("images", e.file);
                return {
                    type: "image",
                    url: "/images/soft/upload/" + e.file.name,
                };
            }
            return {...e};
        });
        formData.append("content", JSON.stringify(contents));
        formData.append("authorId", getState().profile.user?.id + "");
        formData.append("childCategoryId", childCategoryId + "");
        
        api.postFile("/soft/add", formData)
        .then((res) => {
            return res?.json();
        })
        .then((data) => {
            whenLoaded();
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

export { createPostThunk }