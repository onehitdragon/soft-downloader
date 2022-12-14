import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import mainMenuReducer from "./mainMenu/mainMenuSlice";
import homeReducer from "./home/homeSlice";
import filterReducer from "./filter/filterSlice";
import profileReducer from "./profile/profileSlice";
import controlMenuReducer from "./control/controlMenuSlice";
import controlReducer from "./control/controlSlice";
import PostContentModiferReducer from "./control/controlPost/PostContentModiferSlice";
import PostFormReducer from "./control/controlPost/PostFormSlice";

const store = configureStore({
    reducer: {
        mainMenu: mainMenuReducer,
        home: homeReducer,
        filter: filterReducer,
        profile: profileReducer,
        controlMenu: controlMenuReducer,
        control: controlReducer,
        postModifierContent: PostContentModiferReducer,
        postForm: PostFormReducer
    },
    middleware: [reduxThunk]
});

export default store;
export type RootState = ReturnType<typeof store.getState>