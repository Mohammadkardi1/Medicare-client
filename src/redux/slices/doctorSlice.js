import { createSlice } from "@reduxjs/toolkit"
import { updateDoctor } from "../thunks/doctorThunks"



const addAsyncThunkCases = (builder, asyncThunk, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.loading = true
            state.doctorError = null

        })
        .addCase(asyncThunk.fulfilled, (state, action) => { 
            state.loading = false
            state.doctorError = null


        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state.loading = false
            state.doctorError = action?.payload || 'Something went wrong'         

        })
}

const initialState = {
    userInfo: {},
    loading: false,
    doctorError: '', 
}


const authSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        addAsyncThunkCases(builder, updateDoctor, "updateDoctor")



    }
})



export const authThunks = authSlice.actions
export default authSlice.reducer