import { createSlice } from "@reduxjs/toolkit"
import { PostContentModiferState } from ".";

const init: PostContentModiferState = {
    modifierContent: []
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
        }
    }
});

export default PostContentModiferSlice.reducer;
export const { updateModifierContent, addElementToModifierContent } = PostContentModiferSlice.actions;