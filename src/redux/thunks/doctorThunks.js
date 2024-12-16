
import { createAsyncThunk } from '@reduxjs/toolkit';
import { doctorAPI } from '../../api/API';




export const updateDoctor = createAsyncThunk('doctor/updateDoctor', async(userInfo, {rejectWithValue}) => {
    try {
        return await doctorAPI.updateDoctor(userInfo).then((response) => response.data)
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})




