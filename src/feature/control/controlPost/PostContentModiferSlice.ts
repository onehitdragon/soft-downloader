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
                if(action.payload.type === "list"){
                    if(e.type === action.payload.type){
                        if(e.value.length !== action.payload.value.length){
                            return true;
                        }
                        for(let i = 0; i < e.value.length; i++){
                            if(!twoElementIsEqual(e.value[i], action.payload.value[i])){
                                return true;
                            }
                        }
                        return false;
                    }
                }
                return true;
            });
        }
    }
});

function twoElementIsEqual(e1: string | TextElement | ParaElement, e2: string | TextElement | ParaElement){
    if(typeof e1 === "string" && typeof e2 !== "string") return false;
    if(typeof e1 !== "string" && typeof e2 === "string") return false;
    if(typeof e1 === "string" && typeof e2 === "string"){
        if(e1 === e2){
            return true;
        }
        else return false;
    }
    if(typeof e1 !== "string" && typeof e2 !== "string"){
        if(e1.type === e2.type){
            if(e1.value === e2.value){
                return true
            }
        }
    }
    return false;
}

export default PostContentModiferSlice.reducer;
export const { updateModifierContent, addElementToModifierContent,
    removeElementFromModifierContent } = PostContentModiferSlice.actions;