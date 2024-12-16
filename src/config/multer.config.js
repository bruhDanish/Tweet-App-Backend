import multer from "multer";
import multers3 from "multer-s3";
import { s3 } from "./aws.config.js";
import { AWS_BUCKET_NAME } from "./server.config.js";

export const s3Uploader = multer({
    storage: multers3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function(req, file, cb){
            if(!file){
                return cb(new Error("No file found"));
            }
            console.log(file);
            if(file.mimetype !== "image/jpeg" && file.mimetype !== "image/png"){
                return cb(new Error("Invalid file type"));
            }           

            const fileExtension = file.originalname.split(".")[1];

            cb(null, Date.now().toString() + "." + fileExtension);
        }
    })
});