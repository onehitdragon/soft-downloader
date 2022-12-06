import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { RootState } from "../store";

const init: HomeState = {
    listHightestViewing: [],
    listNewestViewing: [],
    listGhostWin11: [],
    listGhostWin10: []
}

const homeSlice = createSlice({
    name: "homeSlice",
    initialState: init,
    reducers: {
        updateListHightestViewing(state, action: { payload: Soft[] }){
            state.listHightestViewing = action.payload;
        },
        updateListNewestViewing(state, action: { payload: Soft[] }){
            state.listNewestViewing = action.payload;
        },
        updateListGhostWin11(state, action: { payload: Soft[] }){
            state.listGhostWin11 = action.payload;
        },
        updateListGhostWin10(state, action: { payload: Soft[] }){
            state.listGhostWin10 = action.payload;
        }
    }
});

export default homeSlice.reducer;
const { updateListHightestViewing, updateListNewestViewing, updateListGhostWin11, 
    updateListGhostWin10 } = homeSlice.actions;

// thunk
function getHightestViewingSoft(whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.get(`/soft/gethightestviewing/?amount=${6}`)
        .then((res) => {
            return res?.json();
        })
        .then((data: Soft[]) => {
            data.forEach((soft) => {
                soft.content = (soft.content as any).replaceAll("\\", "\\\\");
                soft.content = JSON.parse(soft.content as any);
            })
            console.log(data);
            dispatch(updateListHightestViewing(data));
            whenLoaded();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

function getNewestViewingSoft(whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.get(`/soft/getnewestviewing/?amount=${6}`)
        .then((res) => {
            return res?.json();
        })
        .then((data: Soft[]) => {
            data.forEach((soft) => {
                soft.content = (soft.content as any).replaceAll("\\", "\\\\");
                soft.content = JSON.parse(soft.content as any);
            })
            console.log(data);
            dispatch(updateListNewestViewing(data));
            whenLoaded();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

function getListGhostWin11(whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.get(`/soft/getbychildcategory/?childCategoryId=10`)
        .then((res) => {
            return res?.json();
        })
        .then((data: Soft[]) => {
            data.forEach((soft) => {
                soft.content = (soft.content as any).replaceAll("\\", "\\\\");
                soft.content = JSON.parse(soft.content as any);
            })
            console.log(data);
            dispatch(updateListGhostWin11(data));
            whenLoaded();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

function getListGhostWin10(whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.get(`/soft/getbychildcategory/?childCategoryId=9`)
        .then((res) => {
            return res?.json();
        })
        .then((data: Soft[]) => {
            data.forEach((soft) => {
                soft.content = (soft.content as any).replaceAll("\\", "\\\\");
                soft.content = JSON.parse(soft.content as any);
            })
            console.log(data);
            dispatch(updateListGhostWin10(data));
            whenLoaded();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

export { getHightestViewingSoft, getNewestViewingSoft, getListGhostWin11, getListGhostWin10}