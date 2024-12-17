import { createAsyncThunk } from '@reduxjs/toolkit'
import { patientAPI } from './../../api/API';


export const deletePatient = createAsyncThunk('patient/deletePatient', async(patientID, {rejectWithValue}) => {
    try {
        return await patientAPI.deletePatient(patientID).then((response) => response.data)
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})