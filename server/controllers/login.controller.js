import { pool } from "../DB Executions/dbConnection";
import { runQuery } from "../DB Executions/runQuery";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {user} from '../models/user.model';

export const login = async(req, res) =>{
    try {
        
        //Verifying email ID
        const {email, password} = req.body;
        console.log(email, password);
        const findUserQuery = `SELECT * FROM accountinfo 
                               WHERE email = '${email}'`;
        const findUserQueryResult = await pool.query(findUserQuery);
        if(findUserQueryResult.rows.length === 0) throw "Invalid Mail";

        //Verifying account password
        //const isMatch = true;
        const isMatch = await bcrypt.compare(password, findUserQueryResult.rows[0].password);
        if(!isMatch) res.status(500).json({  msg: "Invalid Credentials" });
        else{
            //Creating user profile for backend
            user.userID = findUserQueryResult.rows[0].userid;
            user.userName = findUserQueryResult.rows[0].username;
            user.firstName = findUserQueryResult.rows[0].firstname;
            user.lastName = findUserQueryResult.rows[0].lastname;
            user.email = findUserQueryResult.rows[0].email;
            user.password = findUserQueryResult.rows[0].password;
            user.bio = findUserQueryResult.rows[0].bio;
            user.profileImage = findUserQueryResult.rows[0].profileimage;
            user.location = findUserQueryResult.rows[0].location;
            user.occupation = findUserQueryResult.rows[0].occupation;
            user.friends = findUserQueryResult.rows[0].friends;
            user.specialties = findUserQueryResult.rows[0].specialties;


            //Granting web token for new logged in user
            const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET_KEY);
            delete user.password;

            console.log(user);
            
            //Response with user information
            res.status(201).json( {token, user} );
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}