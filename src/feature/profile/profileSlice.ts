import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit"
import api from "../../util/api";
import { RootState } from "../store";

const init: ProfileState = {
    user: null
}

const profileSlice = createSlice({
    name: "profileSlice",
    initialState: init,
    reducers: {
        updateUser: (state, action: { payload: User }) => {
            state.user = action.payload;
        }
    }
});

export default profileSlice.reducer;
const { updateUser } = profileSlice.actions;

function loginThunk(username: string, password: string, whenLoaded?: (result: boolean) => any){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        api.postFile("/user/check", formData)
        .then((res) => {
            return res?.json();
        })
        .then((data: { user: User, result: boolean }) => {
            console.log(data);
            if(data.result){
                dispatch(updateUser(data.user));
            }
            whenLoaded?.(data.result);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

function registerThunk(username: string, password: string, fullname: string, whenLoaded?: (result: boolean) => any){
    const thunk: ThunkAction<void, RootState, unknown, AnyAction> = (dispatch, getState) => {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("fullname", fullname);
        api.postFile("/user/register", formData)
        .then((res) => {
            return res?.json();
        })
        .then((data: { status: "success" | "error", option: User}) => {
            console.log(data);
            if(data.status === "success"){
                dispatch(updateUser(data.option));
                whenLoaded?.(true);
            }
            else{
                whenLoaded?.(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return thunk;
}

export {loginThunk, registerThunk}