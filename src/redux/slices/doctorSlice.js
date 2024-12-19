import { createSlice } from "@reduxjs/toolkit"
import { fetchDoctor, updateDoctor, deleteDoctor, fetchDoctors, submitReview, 
    searchDoctors } from "../thunks/doctorThunks"



const updateLocalStorageDataField = (updatedData) => {
    const storedProfile = JSON.parse(localStorage.getItem('profile'))

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
            if (stateKey !== 'submitReview') {
                state.doctorLoading = true
                state.doctorError = null
            } else {
                state.reviewLoading = true
                state.reviewError = null
            }
        })
        .addCase(asyncThunk.fulfilled, (state, action) => {
            if (stateKey !== 'submitReview') {
                state.doctorLoading = false
            } else {
                state.reviewLoading = false
            }
            state.doctorError = null
            switch (stateKey) {
                case "fetchDoctor": 
                    state.doctor = action?.payload?.data
                    break
                case "fetchDoctors": 
                    state.doctors = action?.payload?.data
                    break
                case "updateDoctor":
                    updateLocalStorageDataField({...action?.payload?.data})
                    break
                case "deleteDoctor": 
                    localStorage.clear()
                    break
                case "submitReview": 
                    state.doctor = action?.payload?.data
                    updateLocalStorageDataField({...action?.payload?.data})
                    break
                case "searchDoctors": 
                    state.doctors = action?.payload?.data
                    break
                default:
                    break
            }

        })
        .addCase(asyncThunk.rejected, (state, action) => {
            if (stateKey !== 'submitReview') {
                state.doctorLoading = false
                state.doctorError = action?.payload || 'Something went wrong'   
            } else {
                state.reviewLoading = false
                state.reviewError = action?.payload || 'Something went wrong'   
            }
        })
}

const initialState = {
    doctorLoading: false,
    reviewLoading: false,
    doctorError: '',
    reviewError: '',
    doctors: [],
    doctor: {}
}


const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        addAsyncThunkCases(builder, fetchDoctor, "fetchDoctor")
        addAsyncThunkCases(builder, fetchDoctors, "fetchDoctors")
        addAsyncThunkCases(builder, updateDoctor, "updateDoctor")
        addAsyncThunkCases(builder, deleteDoctor, "deleteDoctor")
        addAsyncThunkCases(builder, submitReview, "submitReview")
        addAsyncThunkCases(builder, searchDoctors, "searchDoctors")

    }
})



export const doctorThunks = doctorSlice.actions
export default doctorSlice.reducer