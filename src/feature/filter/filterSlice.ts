import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { FilterState } from ".";
import api from "../../util/api";
import { RootState } from "../store";
import { Order } from "./Order.enum";
import { Sort } from "./Sort.enum";

const init: FilterState = {
    curSort: Sort.MostView,
    curOrder: Order.ACS,
    curChildCategory: null,
    softs: [],
    sortCur: (state) => {
        if(state.curSort === Sort.MostView){
            if(state.curOrder === Order.ACS){
                state.softs.sort((s1, s2) => s1.amountView - s2.amountView);
            }
            else{
                state.softs.sort((s1, s2) => s2.amountView - s1.amountView);
            }
        }
        if(state.curSort === Sort.Newest){
            if(state.curOrder === Order.ACS){
                state.softs.sort((s1, s2) => new Date(s1.createDate).getTime() - new Date(s2.createDate).getTime());
            }
            else{
                state.softs.sort((s1, s2) => new Date(s2.createDate).getTime() - new Date(s1.createDate).getTime());
            }
        }
    }
}

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: init,
    reducers: {
        updateCurSort: (state, action: { payload: Sort }) => {
            state.curSort = action.payload;
            state.sortCur(state);
        },
        updateCurOrder: (state, action: { payload: Order }) => {
            state.curOrder = action.payload;
            state.sortCur(state);
        },
        updateCurChildCategory: (state, action: { payload: ChildCategory }) => {
            state.curChildCategory = action.payload;
        },
        updateSofts: (state, action: { payload: Soft[] }) => {
            state.softs = action.payload;
            state.sortCur(state);
        }
    }
})

export default filterSlice.reducer;
export const { updateCurSort, updateCurOrder } = filterSlice.actions;
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