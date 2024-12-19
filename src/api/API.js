import axios from 'axios'



// creates an instance of axios named API.
// configure common options baseURL and headers for all HTTP requests made with this API instance
const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
})


// add the following headers to each outgoing HTTP request
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
  return req
})


const AUTH_PATH = '/api/auth'
const DOCTOR_PATH = '/api/doctor'
const PATIENT_PATH = '/api/patient'



// Authentication API calls: API.get('/endpoint')
export const authAPI = {
  registerUser: (userInfo) => API.post(`${AUTH_PATH}/register`, userInfo),
  loginUser : (userInfo) => API.post(`${AUTH_PATH}/login`, userInfo),
  verifyEmail : (userInfo) => API.get(`${AUTH_PATH}/${userInfo.role}/${userInfo.id}/verify/${userInfo.token}`),

}

// http://localhost:5000/api/doctor/search?doctorName=M
// Doctor-related API calls
export const doctorAPI = {
  fetchDoctors: () => API.get(`${DOCTOR_PATH}/fetchDoctors`),
  fetchDoctor: (doctorID) => API.get(`${DOCTOR_PATH}/fetchDoctor/${doctorID}`),
  updateDoctor: (loggedInUser) => API.patch(`${DOCTOR_PATH}/updateDoctor/${loggedInUser._id}`, loggedInUser),
  deleteDoctor: (doctorID) => API.delete(`${DOCTOR_PATH}/deleteDoctor/${doctorID}`),
  submitReview: (doctorID, reviewData) => API.post(`${DOCTOR_PATH}/${doctorID}/review`, reviewData), 
  searchDoctors: (doctorName) => API.get(`${DOCTOR_PATH}/search?doctorName=${doctorName}`), 

}

// http://localhost:5000/api/patient/deletePatient/673b8c59664f9f200017124b
export const patientAPI = {
  deletePatient: (patientID) => API.delete(`${PATIENT_PATH}/deletePatient/${patientID}`),
  
}






  // verifyEmail: (id, token) => API.get(`${AUTH_PATH}/${id}/verify/${token}`),
  // resendVerification: (email) => API.get(`${AUTH_PATH}/resendVerification`, { params: { email } }),
  // googleLogin: (loggedInUser) => API.post(`${AUTH_PATH}/googleLogin`, loggedInUser),



// Example usage
// import { authAPI, placeAPI, bookingAPI } from './api';
// authAPI.registerUser({ name: 'John', email: 'john@example.com', password: '123456' });
// placeAPI.getPlacesBySearch('beach');
// bookingAPI.getTrips();




// Place-related API calls
export const placeAPI = {
  // getPlace: (id) => API.get(`${PLACE_PATH}/getPlace/${id}`),
  // getPlacesBySearch: (searchQuery) => API.get(`${PLACE_PATH}/search`, { params: { searchQuery } }),
  // removePlace: (placeID) => API.delete(`${PLACE_PATH}/removePlace/${placeID}`),
};









// Optionally add request interceptors (e.g., for authentication)
// API.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token'); // Retrieve token from local storage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`; // Add token to headers if available
//     }
//     return config;
//   }, (error) => {
//     return Promise.reject(error);
// })


  
// Optionally add response interceptors for error handling
// API.interceptors.response.use(
//     (response) => response, // Return response directly if successful
//     (error) => {
//         console.error('API call error:', error);
//         return Promise.reject(error); // Handle errors globally
//     }
// )


// Optional
// Function for user registration 
// export const registerUser = (loggedInUser) => {
//     return API.post('/api/auth/register', loggedInUser)
//       .then(response => response.data)
//       .catch(error => {
//         console.error('Registration error:', error);
//         throw error; // Rethrow error for further handling
//       });
//   };
















