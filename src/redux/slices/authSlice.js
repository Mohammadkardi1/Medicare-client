import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser, verifyEmail } from './../thunks/authThunks';


const addAsyncThunkCases = (builder, asyncThunk, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.loading = true
            state.authError = null



            console.log("Verify Email is working, pending")
        })
        .addCase(asyncThunk.fulfilled, (state, action) => { 

            state.loading = false
            state.isVerified = true


            // state[stateKey] = action.payload

            console.log("Verify Email is working, fulfilled")
        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state.loading = false
            state.isVerified = false


            console.log(action.payload)

            console.log("Verify Email working, rejection")

            state.authError = action.payload || 'Something went wrong'         
        })
}

const initialState = {
    userInfo: {},
    loading: false,
    isVerified: false,
    registration: "",
    authError: '', 
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        addAsyncThunkCases(builder, registerUser, "registration")
        addAsyncThunkCases(builder, loginUser)
        addAsyncThunkCases(builder, verifyEmail)


    }
})



export const authActions = authSlice.actions
export default authSlice.reducer