import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

  cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary = async()=>{
        try{
            if(!localFilePath) return null;
            const response = await  cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })

            console.log("file is uploaded on cloudinary ",response.url)
            return response
        }catch(error){
            fs.unlinkSync(localFilePath)
            return null
        }
    }
    

       const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);


    export {uploadOnCloudinary}