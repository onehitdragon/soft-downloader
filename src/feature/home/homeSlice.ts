import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import api from "../../util/api";
import { RootState } from "../store";

const init: HomeState = {
    listHightestViewing: []
}

const homeSlice = createSlice({
    name: "homeSlice",
    initialState: init,
    reducers: {
        updateListHightestViewing(state, action: { payload: Soft[] }){
            state.listHightestViewing = action.payload;
        }
    }
});

export default homeSlice.reducer;
const { updateListHightestViewing } = homeSlice.actions;

// thunk
function getNewestViewingSoft(whenLoaded: Function){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        api.get(`/soft/gethightestviewing/?amount=${5}`)
        .then((res) => {
            return res?.json();
        })
        .then((data: Soft[]) => {
            dispatch(updateListHightestViewing(data));
            whenLoaded();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

export { getNewestViewingSoft }