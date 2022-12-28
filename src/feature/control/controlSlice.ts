import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { ControlState, Info } from ".";
import api from "../../util/api";
import { RootState } from "../store";

const init: ControlState = {
    info: null,
    softs: null,
    categories: null
}

const controlSlice = createSlice({
    name: "controlSlice",
    initialState: init,
    reducers: {
        updateInfo: (state, action: { payload: Info }) => {
            state.info = action.payload;
        },
        updateSofts: (state, action: { payload: Soft[] }) => {
            state.softs = action.payload;
        },
        updateCategories: (state, action: { payload: Category[] }) => {
            state.categories = action.payload;
        }
    }
});

export default controlSlice.reducer;
const { updateInfo, updateSofts, updateCategories } = controlSlice.actions;

//thunk
function loadInfoControl(){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        if(getState().control.info !== null) return;

        api.get("/control/info")
        .then((res) => {
            return res?.json();
        })
        .then((data: Info) => {
            console.log(data);
            dispatch(updateInfo(data));
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

function loadSoftControl(){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        if(getState().control.softs !== null) return;

        api.get("/soft/getall")
        .then((res) => {
            return res?.json();
        })
        .then((data: Soft[]) => {
            data.forEach((soft) => {
                soft.content = (soft.content as any).replaceAll("\\", "\\\\");
                soft.content = JSON.parse(soft.content as any);
            })
            console.log(data);
            dispatch(updateSofts(data));
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

function loadCategoryControl(){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.get("/category/getall")
        .then((res) => {
            return res?.json();
        })
        .then((data: Category[]) => {
            dispatch(updateCategories(data));
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

export { loadInfoControl, loadSoftControl, loadCategoryControl }