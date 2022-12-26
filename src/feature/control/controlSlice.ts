import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { ControlState, Info } from ".";
import api from "../../util/api";
import { RootState } from "../store";

const init: ControlState = {
    info: null
}

const controlSlice = createSlice({
    name: "controlSlice",
    initialState: init,
    reducers: {
        updateInfo: (state, action: { payload: Info }) => {
            state.info = action.payload;
        }
    }
});

export default controlSlice.reducer;
const { updateInfo } = controlSlice.actions;

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

export { loadInfoControl }