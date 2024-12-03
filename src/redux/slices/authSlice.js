import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from './../thunks/authThunks';


const addAsyncThunkCases = (builder, asyncThunk, asyncThunkName, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {

            console.log(`${asyncThunkName} pending`)

            // state.loading = true
            state.authError = null

        })
        .addCase(asyncThunk.fulfilled, (state, action) => { 

            console.log(`${asyncThunkName} fulfilled`)
            console.log(action.payload)

            // state.loading = false
            // state.user = action.payload
            //localStorage.setItem('profile', JSON.stringify(action.payload)); // Optionally store data in localStorage

        })
        .addCase(asyncThunk.rejected, (state, action) => {
            console.log(`${asyncThunkName} rejected`)
            console.log(action.payload)

            state.authError = action.payload || 'Something went wrong'         



            // state.loading = false
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

        addAsyncThunkCases(builder, registerUser, "registration thunk")
        addAsyncThunkCases(builder, loginUser, "login thunk")


    }
})



export const authActions = authSlice.actions
export default authSlice.reducer