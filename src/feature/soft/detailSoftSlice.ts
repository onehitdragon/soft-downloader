import { createSlice } from "@reduxjs/toolkit";

const init: DetailSoftState = {
    currentSoft: null
}

const detailSoftSlice = createSlice({
    name: "detailSoftSlice",
    initialState: init,
    reducers: {

    }
});

export default detailSoftSlice.reducer;