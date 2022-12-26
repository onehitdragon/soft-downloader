import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import mainMenuReducer from "./mainMenu/mainMenuSlice";
import homeReducer from "./home/homeSlice";
import filterReducer from "./filter/filterSlice";
import profileReducer from "./profile/profileSlice";
import controlMenuReducer from "./control/controlMenuSlice";

const store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer,
        home: homeReducer,
        filter: filterReducer,
        profile: profileReducer,
        controlMenu: controlMenuReducer
    },
    middleware: [reduxThunk]
});

export default store;
export type RootState = ReturnType<typeof store.getState>