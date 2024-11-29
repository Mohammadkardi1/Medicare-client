const uplaod_preset = import.meta.env.VITE_UPLOAD_PRESET
const cloud_name = import.meta.env.VITE_CLOUD_NAME


const uploadImageToCloudinary = async file => {

    console.log('VITE_CLOUD_NAME', cloud_name)
    console.log('uplaod_preset', uplaod_preset)

    const uplaodData = new FormData()

    uplaodData.append('file', file)
    uplaodData.append('upload_preset', "medicare")
    uplaodData.append('cloud_name', "dziawjklk")


    const res = await fetch(`https://api.cloudinary.com/v1_1/dziawjklk/image/uplaod`, {
        method: 'post',
        body: uplaodData
    })

    const data = await res.json()
    
    return data  // Return the details of the uploaded file (e.g., URL, ID) as a JavaScript object.
}


export default uploadImageToCloudinary