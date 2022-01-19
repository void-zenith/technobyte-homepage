import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "./faqapi";

const initialState = {
    data: [],
    loading: false,
};

export const getData = createAsyncThunk('data/getData', async () => {
    return await api.getAllData();

});

const faqSlice = createSlice({
    name: "data",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getData.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default faqSlice.reducer;
