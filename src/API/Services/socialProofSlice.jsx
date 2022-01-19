import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "./socialProofAPI";

const initialState = {
    proof: [],
    loading: false,
};

export const getData = createAsyncThunk('proofs/getData', async () => {
    return await api.getAllData();
    // return fetch("https://internal.technobyte.dev/api/faq/").then((res) =>
    //     res.json()
    // );
});

const socialProofSlice = createSlice({
    name: "proofs",
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

export default socialProofSlice.reducer;
