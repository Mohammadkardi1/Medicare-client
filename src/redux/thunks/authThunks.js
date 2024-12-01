import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPI } from "../../api/API"


// import { authAPI, placeAPI, bookingAPI } from './api';
// authAPI.registerUser({ name: 'John', email: 'john@example.com', password: '123456' });
// placeAPI.getPlacesBySearch('beach');
// bookingAPI.getTrips();


export const registerUser = createAsyncThunk('auth/registerUser', async (userInfo, { rejectWithValue }) => {
  try {
    return await authAPI.registerUser(userInfo).then((response) => response.data) // This will be the `fulfilled` payload
  } catch (error) {
    return rejectWithValue(error.response.data.message) // For the `rejected` payload
  }
}
)


