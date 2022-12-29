import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { PostFormState } from "..";
import api from "../../../util/api";
import { RootState } from "../../store";
import { addOneSoft, removeOneSoft, updateOneSoft } from "../controlSlice";
import { v4 as uuidv4 } from "uuid";

const init: PostFormState = {
    title: "",
    curCategory: null,
    curChildCategory: null,
    isAdd: true,
    softIdModify: null
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
        updateSoftIdModify: (state, action: { payload: number }) => {
            state.softIdModify = action.payload;
        },
    }
});

export default PostFormSlice.reducer;
export const { updateTitle, updateCurCategory, updateCurChildCategory, updateIsAdd, updateSoftIdModify } = PostFormSlice.actions;

function createPostThunk(title: string, childCategoryId: number, whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        const formData = new FormData();
        formData.append("title", title);
        const contents: (TitleElement | TextElement | ParaElement | ListElement | ImageElement)[] = getState().postModifierContent.modifierContent.map((e) => {
            if(e.type === "image"){
                const file = new File([e.file], uuidv4() + e.file.name, { type: e.file.type, lastModified: e.file.lastModified });
                formData.append("images", file);
                return {
                    type: "image",
                    url: "/images/soft/upload/" + file.name,
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
        .then(({ option }: { option: Soft }) => {
            option.content = (option.content as any).replaceAll("\\", "\\\\");
            option.content = JSON.parse(option.content as any);
            dispatch(addOneSoft(option));
            whenLoaded();
            console.log(option);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

function removePostThunk(id: number, whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.delete("/soft/" + id)
        .then((res) => {
            return res?.json();
        })
        .then((data) => {
            whenLoaded();
            dispatch(removeOneSoft(id));
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

function editPostThunk(title: string, childCategoryId: number, whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        const formData = new FormData();
        formData.append("title", title);
        const contents: (TitleElement | TextElement | ParaElement | ListElement | ImageElement)[] = getState().postModifierContent.modifierContent.map((e) => {
            if(e.type === "image"){
                const file = new File([e.file], uuidv4() + e.file.name, { type: e.file.type, lastModified: e.file.lastModified });
                formData.append("images", file);
                return {
                    type: "image",
                    url: "/images/soft/upload/" + file.name,
                };
            }
            return {...e};
        });
        formData.append("content", JSON.stringify(contents));
        formData.append("authorId", getState().profile.user?.id + "");
        formData.append("childCategoryId", childCategoryId + "");
        
        api.putFile("/soft/" + getState().postForm.softIdModify, formData)
        .then((res) => {
            return res?.json();
        })
        .then(({ option }: { option: Soft }) => {
            option.content = (option.content as any).replaceAll("\\", "\\\\");
            option.content = JSON.parse(option.content as any);
            dispatch(updateOneSoft(option));
            whenLoaded();
            console.log(option);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

export { createPostThunk, removePostThunk, editPostThunk }