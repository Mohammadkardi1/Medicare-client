export const nameValidation =  {
    required: "Enter your name",
    minLength: {
        value: 4,
        message: "Your name must be at least 4 characters long"
    },
        pattern: {
            value: /^[a-zA-Z0-9\s]+$/,
            message: "Your name must be alphanumeric"
        }
}

  
export const emailValidation = {
    required:"Enter your email",
    pattern: {
        value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
        message: "Enter a Valid Email"
    }
}
  
  
export const passwordValidation = (value) => {
    if (!value) {
      return "Enter your password"
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters long"
    }
    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter"
    }
    if (!/[a-z]/.test(value)) {
      return "Password must contain at least one lowercase letter"
    }
    if (!/\d/.test(value)) {
      return "Password must contain at least one number"
    }
    if (!/[$-/:-?{-~@#!"^_`\[\]]/.test(value)) {
      return "Password must contain at least one symbol"
    }
    return null
}
  
export const validateImageType = (value) => {
      
    if (!value[0]) {
        return true
    }
  
    const file = value[0]
    const types = ['image/jpg', 'image/png', "image/jpeg"]
  
    if ( !types.includes(file.type)  ) {
      return 'Please select a valid photo JPG, PNG or JPEG';
    }
  
    return true
}

export const phoneValidation = {
  pattern: {
    value: /^(\+|0)[1-9]\d{0,14}$/, 
    message: "Enter a valid phone number",
  },
  minLength: {
    value: 10,
    message: "Phone number must be at least 10 digits long",
  },
  maxLength: {
    value: 15, 
    message: "Phone number must not exceed 15 digits",
  }
}

export const bioValidation = {
  maxLength: {
    value: 100, 
    message: "Bio must not exceed 100 characters",
  },
}

export const ticketPriceValidation = {
  min: {
    value: 0.01, 
    message: "Ticket price must be at least $0.01",
  },
  max: {
    value: 10000,
    message: "Ticket price must not exceed $10,000",
  },
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message: "Enter a valid price (e.g., 10 or 10.99)",
  },
}


export const totalPatientsValidation={
  min: {
    value: 0,
    message: "Number must be at least 0",
  },
  max: {
    value: 10000,
    message: "Number must not exceed 10,000",
  },
  pattern: {
    value: /^[0-9]+$/,
    message: "Please enter a valid number",
  },
}