import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { RootState } from "../store";

let init: MainMenuState = {
    categories: []
};

const mainMenuSlice = createSlice({
    name: "mainMenuSlice",
    initialState: init,
    reducers: {
        updateCategories(state, action: { payload: Category[] }){
            state.categories = action.payload;
        }
    }
});

export default mainMenuSlice.reducer;
const { updateCategories } = mainMenuSlice.actions;

// thunk
function getAllCategoryThunk(whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.get("/category/getall")
        .then((res) => {
            return res?.json();
        })
        .then((data: Category[]) => {
            dispatch(updateCategories(data));
            whenLoaded();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

export { getAllCategoryThunk }