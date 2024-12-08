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
            console.log("Verify Email is working, fulfilled")

            state.loading = false
            state.authError = null


            switch (stateKey) {
                case "verifyEmail":
                    state.isVerified = true
                    break
            }
        })

        .addCase(asyncThunk.rejected, (state, action) => {
            console.log("Verify Email working, rejection")


            state.loading = false
            state.authError = action.payload || 'Something went wrong'         

            
            switch (stateKey) {
                case "verifyEmail":
                    state.isVerified = false
                    break
            }
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
        clearAuthError: (state) => {
            state.authError = ''
        }

    },
    extraReducers: (builder) => {

        addAsyncThunkCases(builder, registerUser, "registration")
        addAsyncThunkCases(builder, loginUser)
        addAsyncThunkCases(builder, verifyEmail, "verifyEmail")


    }
})



export const authThunks = authSlice.actions
export default authSlice.reducer