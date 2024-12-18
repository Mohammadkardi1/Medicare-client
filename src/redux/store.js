import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice.js"
import doctorSlice from "./slices/doctorSlice.js"
import patientSlice from "./slices/patientSlice.js"

const store = configureStore({
    reducer: {
        auth: authSlice,
        doctor: doctorSlice,
        patient: patientSlice,
    }
})


export default store