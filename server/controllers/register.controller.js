import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { user } from '../models/user.model';

export const register = async(req, res) =>{
    try {

        const password = req.body.password;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        user.userid = req.body.userid;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = passwordHash;
        user.profileImage = req.body.profileImage;
        user.location = req.body.location;
        user.occupation = req.body.occupation;
        user.friends = req.body.friends;
        user.viewedProfile = Math.floor(Math.random()*1000);
        user.impressions = Math.floor(Math.random()*1000);

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({  error: err.message });
    }
}