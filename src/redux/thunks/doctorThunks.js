import { createAsyncThunk } from '@reduxjs/toolkit'
import { doctorAPI } from '../../api/API'


export const fetchDoctors = createAsyncThunk('doctor/fetchDoctors', async(_, {rejectWithValue}) => {
    try {
        return await doctorAPI.fetchDoctors().then((response) => response.data)
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Something went wrong")
    }
})

export const fetchDoctor = createAsyncThunk('doctor/fetchDoctor', async(doctorID, {rejectWithValue}) => {
    try {
        return await doctorAPI.fetchDoctor(doctorID).then((response) => response.data)
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Something went wrong")
    }
})

export const updateDoctor = createAsyncThunk('doctor/updateDoctor', async(loggedInUser, {rejectWithValue}) => {
    try {
        return await doctorAPI.updateDoctor(loggedInUser).then((response) => response.data)
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Something went wrong")
    }
})

export const deleteDoctor = createAsyncThunk('doctor/deleteDoctor', async(doctorID, {rejectWithValue}) => {
    try {
        return await doctorAPI.deleteDoctor(doctorID).then((response) => response.data)
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Something went wrong")
    }
})

export const submitReview = createAsyncThunk('doctor/submitReview', async ({ doctorID, reviewData }, { rejectWithValue }) => {
    try {
      return await doctorAPI.submitReview(doctorID, reviewData).then((response) => response.data) 
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Something went wrong") 
    }
})

export const searchDoctors = createAsyncThunk('doctor/searchDoctors', async( doctorName , {rejectWithValue}) => {
    try {
        return await doctorAPI.searchDoctors(doctorName).then((response) => response.data)
    } catch (error) {
        return rejectWithValue(error.response.data.message || "Something went wrong")
    }
})


