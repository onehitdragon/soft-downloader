import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import mainMenuReducer from "./mainMenu/mainMenuSlice";
import homeReducer from "./home/homeSlice";

const store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer,
        home: homeReducer
    },
    middleware: [reduxThunk]
});

export default store;
export type RootState = ReturnType<typeof store.getState>