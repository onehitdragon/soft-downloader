import { createSlice } from "@reduxjs/toolkit"
import { ImageElementUpload, PostContentModiferState } from "..";

const init: PostContentModiferState = {
    modifierContent: []
}
const PostContentModiferSlice = createSlice({
    name: "PostContentModiferSlice",
    initialState: init,
    reducers: {
        updateModifierContent: (state, action: { payload: (TitleElement | TextElement | ParaElement | ListElement | ImageElementUpload)[] }) => {
            state.modifierContent = action.payload;
        },
        addElementToModifierContent: (state, action: { payload: (TitleElement | TextElement | ParaElement | ListElement | ImageElementUpload) }) => {
            state.modifierContent.push(action.payload);
        },
        removeElementFromModifierContent: (state, action: { payload: (TitleElement | TextElement | ParaElement | ListElement | ImageElementUpload) }) => {
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
                    if(e.type === action.payload.type && e.file.name === action.payload.file.name){
                        return false;
                    }
                }
                return true;
            });
        }
    }
});

export default PostContentModiferSlice.reducer;
export const { updateModifierContent, addElementToModifierContent,
    removeElementFromModifierContent } = PostContentModiferSlice.actions;