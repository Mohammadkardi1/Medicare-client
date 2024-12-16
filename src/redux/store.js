import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice.js"
import doctorSlice from "./slices/doctorSlice.js"

const store = configureStore({
    reducer: {
        auth: authSlice,
        doctor: doctorSlice
    }
})


export default store