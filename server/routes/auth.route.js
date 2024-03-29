import express from 'express'
const router = express.Router();

import multer from 'multer';
import { register } from '../controllers/register.controller';

/* FILE STORAGE MIDDLEWARE*/
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage });

router.post("/", upload.single("picture"), register);

export default router;