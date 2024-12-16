import { createSlice } from "@reduxjs/toolkit"
import { fetchDoctor, updateDoctor } from "../thunks/doctorThunks"


const updateLocalStorageDataField = (updatedData) => {
    const storedProfile = JSON.parse(localStorage.getItem('profile'));

    if (storedProfile) {
        const updatedProfile = {
            ...storedProfile,
            data: updatedData, 
        }
        localStorage.setItem('profile', JSON.stringify(updatedProfile));
    } else {
        console.error('No profile data found in localStorage.');
    }
}


const addAsyncThunkCases = (builder, asyncThunk, stateKey, options = {}) => {
    builder
        .addCase(asyncThunk.pending, (state) => {
            state.doctorLoading = true
            state.doctorError = null

        })
        .addCase(asyncThunk.fulfilled, (state, action) => { 
            state.doctorLoading = false
            state.doctorError = null

            switch (stateKey) {
                case "updateDoctor":
                    updateLocalStorageDataField({...action?.payload?.data})
                    console.log("updateDoctor Thunk", {...action?.payload})
                    break
                default:
                    break
            }


        })
        .addCase(asyncThunk.rejected, (state, action) => {
            state.doctorLoading = false
            state.doctorError = action?.payload || 'Something went wrong'         

        })
}

const initialState = {
    doctorLoading: false,
    doctorError: '', 
}


const authSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        addAsyncThunkCases(builder, updateDoctor, "updateDoctor")
        addAsyncThunkCases(builder, fetchDoctor, "fetchDoctor")



    }
})



export const authThunks = authSlice.actions
export default authSlice.reducer