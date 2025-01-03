import { createSlice } from "@reduxjs/toolkit"
import { deletePatient } from './../thunks/patientThunks';






const addAsyncThunkCases = (builder, asyncThunk, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.patientLoading = true
            state.patientError = null
        })
        .addCase(asyncThunk.fulfilled, (state, action) => { 
            state.patientLoading = false
            state.patientError = null

            switch (stateKey) {
                case "deletePatient": 
                    localStorage.clear()
                default:
                    break
            }
        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state.patientLoading = false
            state.patientError = action?.payload || 'Something went wrong'         
        })
}
const initialState = {
    patientLoading: false,
    patientError: '', 
}
const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        addAsyncThunkCases(builder, deletePatient, "deletePatient")
    }
})

export const patientThunks = patientSlice.actions
export default patientSlice.reducer