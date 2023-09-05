import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import  authSlice from "./components/Auth/AuthSlice"
import postSlice from "./postSlice"

const store=configureStore({
    reducer:{
        authReducer:authSlice.reducer,
        postReducer:postSlice.reducer
    }
})

export default store
