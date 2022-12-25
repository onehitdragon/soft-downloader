import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import mainMenuReducer from "./mainMenu/mainMenuSlice";
import homeReducer from "./home/homeSlice";
import filterReducer from "./filter/filterSlice";

const store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer,
        home: homeReducer,
        filter: filterReducer
    },
    middleware: [reduxThunk]
});

export default store;
export type RootState = ReturnType<typeof store.getState>