import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from './../thunks/authThunks';


const addAsyncThunkCases = (builder, asyncThunk, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {

            state.authError = null
        })
        .addCase(asyncThunk.fulfilled, (state, action) => { 

            // state[stateKey] = action.payload

            console.log(action.payload)
        })
        .addCase(asyncThunk.rejected, (state, action) => {
            console.log(action.payload)

            state.authError = action.payload || 'Something went wrong'         
        })
}

const initialState = {
    userInfo: {},
    loading: false,
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


    }
})



export const authActions = authSlice.actions
export default authSlice.reducer