import './App.css'
import Layout from './layout/Layout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom'
import decodeJWT from './utils/decodeJWT'
import { authThunks } from './redux/slices/authSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles



function App() {

  const dispatch = useDispatch()

  const showToast = () => {
    toast.success('This is a success message!');
    // You can also use toast.error, toast.info, or toast.warning for different types
  };

  showToast()


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('profile'))?.token
    if (token) {
      const decodedToken = decodeJWT(token)
      if (decodedToken.exp * 1000 > new Date().getTime()) {
        try {
          dispatch(authThunks.loginByToken())
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          dispatch(authThunks.logout())
        } catch (error) {
            console.log(error)
        }
      }
    }
  }, [])

  

  return (
    <BrowserRouter>
      <ToastContainer 
        position="top-right" // You can change the position as needed

      />
      <Layout />
    </BrowserRouter>
  )
}

export default App
