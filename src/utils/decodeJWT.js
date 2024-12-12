// VITE_CLOUDINARY_CLOUD_NAME = dziawjklk
// VITE_CLOUDINARY_UPLOAD_PRESET = medicare
// VITE_CLOUDINARY_FOLDER_NAME = medicare
// VITE_API_BASE_URL = http://localhost:5000/





const decodeJWT = (token) => {
    try {
      // Split the token into its three parts (header, payload, signature)
      const [header, payload, signature] = token.split('.')
  
      // Decode the base64-encoded header and payload
      const decodedHeader = JSON.parse(atob(header))
      const decodedPayload = JSON.parse(atob(payload))
  
      // Return the decoded payload
      return decodedPayload
    } catch (error) {
      console.error('Failed to decode token:', error)
      return null
    }
  }

  export default decodeJWT