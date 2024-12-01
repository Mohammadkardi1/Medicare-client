import axios from 'axios'



// creates an instance of axios named API.
// configure common options baseURL and headers for all HTTP requests made with this API instance
const API = axios.create({
    baseURL: process.env.VITE_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
})




const AUTH_PATH = '/api/auth'





// Authentication API calls: API.get('/endpoint')
export const authAPI = {
  registerUser: (userInfo) => API.post(`${AUTH_PATH}/register`, userInfo),



  // verifyEmail: (id, token) => API.get(`${AUTH_PATH}/${id}/verify/${token}`),
  // resendVerification: (email) => API.get(`${AUTH_PATH}/resendVerification`, { params: { email } }),
  // googleLogin: (userInfo) => API.post(`${AUTH_PATH}/googleLogin`, userInfo),
};


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
// export const registerUser = (userInfo) => {
//     return API.post('/api/auth/register', userInfo)
//       .then(response => response.data)
//       .catch(error => {
//         console.error('Registration error:', error);
//         throw error; // Rethrow error for further handling
//       });
//   };
















