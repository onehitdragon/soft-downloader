import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { RootState } from "../store";

const init: filterState = {
    curChildCategory: null,
    softs: []
}

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: init,
    reducers: {
        updateCurChildCategory: (state, action: { payload: ChildCategory }) => {
            state.curChildCategory = action.payload;
        },
        updateSofts: (state, action: { payload: Soft[] }) => {
            state.softs = action.payload;
        },
    }
})

export default filterSlice.reducer;
const { updateCurChildCategory, updateSofts } = filterSlice.actions;

function getSoftsByChildCategory(childCategory: ChildCategory, whenLoaded: Function = () => {}){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.get(`/soft/getbychildcategory/?childCategoryId=${childCategory.id}`)
        .then((res) => {
            return res?.json();
        })
        .then((data: Soft[]) => {
            data.forEach((soft) => {
                soft.content = (soft.content as any).replaceAll("\\", "\\\\");
                soft.content = JSON.parse(soft.content as any);
            })
            console.log(data);
            dispatch(updateCurChildCategory(childCategory));
            dispatch(updateSofts(data));
            whenLoaded();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

export { getSoftsByChildCategory }