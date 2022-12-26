import { createSlice } from "@reduxjs/toolkit";
import { ControlMenuState } from ".";
import { MenuItemType } from "./MenuItemType.enum";

const init: ControlMenuState = {
    curMenuItem: MenuItemType.Info
}

const controlMenuSlice = createSlice({
    name: "controlMenuSlice",
    initialState: init,
    reducers: {
        updateCurMenuItem: (state, action: { payload: MenuItemType }) => {
            state.curMenuItem = action.payload;
        }
    }
});

export default controlMenuSlice.reducer;
export const { updateCurMenuItem } = controlMenuSlice.actions;