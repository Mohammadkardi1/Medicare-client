


const uploadImageToCloudinary = async file => {

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    const folderName = import.meta.env.VITE_CLOUDINARY_FOLDER_NAME



    const uploadData = new FormData()
    uploadData.append('file', file)
    uploadData.append('upload_preset', uploadPreset)
    uploadData.append("folder", folderName)
    

    
    try {
        // Cloudinary's upload API endpoint
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: uploadData
        })

        const data = await response.json()


        //data.secure_url
        // Return the details of the uploaded file (e.g., URL, ID) as a JavaScript object.
        return data  


    } catch (error) {
        console.log("Error uploading image to Cloudinary:", error.message);
    }
    

}


export default uploadImageToCloudinary