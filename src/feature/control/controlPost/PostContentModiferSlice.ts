import { createSlice } from "@reduxjs/toolkit"
import { PostContentModiferState } from "..";

const init: PostContentModiferState = {
    modifierContent: [],
    files: []
}

const PostContentModiferSlice = createSlice({
    name: "PostContentModiferSlice",
    initialState: init,
    reducers: {
        updateModifierContent: (state, action: { payload: (TitleElement | TextElement | ParaElement | ListElement | ImageElement)[] }) => {
            state.modifierContent = action.payload;
        },
        addElementToModifierContent: (state, action: { payload: (TitleElement | TextElement | ParaElement | ListElement | ImageElement) }) => {
            state.modifierContent.push(action.payload);
        },
        addFile: (state, action: { payload: File }) => {
            state.files.push(action.payload);
        },
        removeElementFromModifierContent: (state, action: { payload: (TitleElement | TextElement | ParaElement | ListElement | ImageElement) }) => {
            state.modifierContent = state.modifierContent.filter((e) => {
                if(action.payload.type === "para" || action.payload.type === "title"){
                    if(e.type === action.payload.type && e.value === action.payload.value){
                        return false;
                    }
                    else{
                        return true;
                    }
                }
                if(action.payload.type === "image"){
                    if(e.type === action.payload.type && e.url === action.payload.url){
                        return false;
                    }
                }
                return true;
            });
        }
    }
});

export default PostContentModiferSlice.reducer;
export const { updateModifierContent, addElementToModifierContent, addFile,
    removeElementFromModifierContent } = PostContentModiferSlice.actions;