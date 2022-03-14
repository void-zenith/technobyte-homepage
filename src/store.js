import {
    configureStore
} from "@reduxjs/toolkit";

import {
    combineReducers
} from "redux";
import dataReducer from './API/FAQ/faqSlice';
import socialProofReducer from './API/Services/socialProofSlice'
import newsLetterReducer from './API/Newsletter/newsSlice';
import messageReducer from './API/Newsletter/messageSlice';


const store = configureStore({
    reducer: combineReducers({
        data: dataReducer,
        email: newsLetterReducer,
        message: messageReducer,
        // proof: socialProofReucer,

    }),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store;