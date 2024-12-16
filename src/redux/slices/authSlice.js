import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser, verifyEmail } from './../thunks/authThunks';



const addAsyncThunkCases = (builder, asyncThunk, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.loading = true
            state.authError = null

        })

        .addCase(asyncThunk.fulfilled, (state, action) => { 
            state.loading = false
            state.authError = null

            switch (stateKey) {
                case "verifyEmail":
                    state.isVerified = true
                    break
                case "login": 
                    state.userInfo = action?.payload.data
                    localStorage.setItem('profile', JSON.stringify({...action?.payload}))
                    break
            }
        })

        .addCase(asyncThunk.rejected, (state, action) => {
            state.loading = false
            state.authError = action?.payload || 'Something went wrong'         

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
    authError: '', 
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearAuthError: (state) => {
            state.authError = ''
        },
        logout: (state) => {
            localStorage.clear()
            state.userInfo = null
        },
        loginByToken: (state) => {
            state.userInfo = JSON.parse(localStorage.getItem('profile')).data
        },
        setLoading: (state, loading) => {
            state.loading = loading
        },

    },
    extraReducers: (builder) => {
        addAsyncThunkCases(builder, registerUser, "registration")
        addAsyncThunkCases(builder, loginUser, "login")
        addAsyncThunkCases(builder, verifyEmail, "verifyEmail")

    }
})



export const authThunks = authSlice.actions
export default authSlice.reducer