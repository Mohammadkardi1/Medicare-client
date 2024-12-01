import { createSlice } from "@reduxjs/toolkit"
import { registerUser } from './../thunks/authThunks';


const addAsyncThunkCases = (builder, asyncThunk, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {

            console.log("registration pending")

            state.loading = true
            state.authError = null

        })
        .addCase(asyncThunk.fulfilled, (state, action) => {

            console.log("registeration fulfilled")
            console.log(action.payload)

            state.loading = false
            state.user = action.payload // Save user data to the state
            //localStorage.setItem('profile', JSON.stringify(action.payload)); // Optionally store data in localStorage

        })
        .addCase(asyncThunk.rejected, (state, action) => {

            console.log("registration rejected")
            console.log(action.payload)
            state.loading = false
            state.authError = action.payload || 'Something went wrong' // Save authError message            
        })
}




const authSlice = createSlice({
    name: "auth",
    initialState: {
        userInfo: {},
        loading: false,
        authError: '', 
    },
    reducers: {

    },
    extraReducers: (builder) => {

        // Add async thunk cases for Registeration
        addAsyncThunkCases(builder, registerUser);


    }
})



export const authActions = authSlice.actions
export default authSlice.reducer