import { createSlice } from "@reduxjs/toolkit"



const addAsyncThunkCases = (builder, asyncThunk, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.loading = true
            state.error = null

        })
        .addCase(asyncThunk.fulfilled, (state, action) => {

            state.loading = false
            state.user = action.payload // Save user data to the state
            //localStorage.setItem('profile', JSON.stringify(action.payload)); // Optionally store data in localStorage

        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong'; // Save error message            
        })
}




const authSlice = createSlice({
    name: "auth",
    initialState: {

    },
    reducers: {

    },
    extraReducers: (builder) => {

        // Add async thunk cases for Registeration
        addAsyncThunkCases(builder, registerUser);


    }
})



export const { logout } = authSlice.actions
export default authSlice.reducer