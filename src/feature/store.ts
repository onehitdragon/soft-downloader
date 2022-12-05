import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import mainMenuReducer from "./mainMenu/mainMenuSlice";

const store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer
    },
    middleware: [reduxThunk]
});

export default store;
export type RootState = ReturnType<typeof store.getState>