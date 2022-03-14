import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import * as api from "./newsapi";

const initialState = {
    email: '',
    loading: false,
    error: '',
    status: 'idle'

};


export const postEmail = createAsyncThunk(
    "email/postEmail",
    async ({ email }, {
        rejectWithValue
    }) => {
        try {
            const res = await api.submitEmail(
                email
            )
            return res.data;

        }
        catch (error) {
            const errorMsg = error.response.data.email
            return rejectWithValue(error.response.data);

        }

    }
);


const newsLetterSlice = createSlice({
    name: "email",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(postEmail.pending, (state) => {
                state.loading = true;
            })
            .addCase(postEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.email = action.payload;
                state.status = 'succeeded';

            })
            .addCase(postEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.email;
            });
    },
});

export default newsLetterSlice.reducer;
