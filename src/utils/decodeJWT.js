


const decodeJWT = (token) => {
    try {
      const [header, payload, signature] = token.split('.')
      const decodedHeader = JSON.parse(atob(header))
      const decodedPayload = JSON.parse(atob(payload))
      return decodedPayload
    } catch (error) {
      console.log('Failed to decode token:', error)
      return null
    }
  }

  export default decodeJWT