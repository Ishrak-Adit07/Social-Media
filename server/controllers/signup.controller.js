import bcrypt from 'bcrypt';
import { user } from '../models/user.model';
import { pool } from '../DB Executions/dbConnection';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

export const uniqueEmailVerify = async(req, res) =>{
    try {
        
        //New Mail Validity Inspection
        user.email = req.body.email;
        const newMailValidityQuery = `SELECT * FROM accountinfo 
                                      WHERE email = '${user.email}'`;
        const newMailValidityQueryResult = await pool.query(newMailValidityQuery);
        if(newMailValidityQueryResult.rows.length != 0) res.status(500).json({  msg: "Mail is already in use" });
        else res.status(200).json({  msg: "Mail is Valid" });

    } catch (err) {
        res.status(500).json({  error: err.message });
    }
}

export const signUp = async(req, res) =>{
    try {

        console.log("Reached Here");
        //New Mail
        user.email = req.body.email;  

        //Encrypting password for storing in database
        const password = req.body.password;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        //Accessing rest of information from signup request body
        user.userID = uuidv4();
        user.userName = req.body.userName;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.password = passwordHash;
        user.profileImage = req.body.profileImage;
        user.location = req.body.location;
        user.occupation = req.body.occupation;
        user.friends = []; //req.body.friends;
        user.viewedProfile = 0;
        user.impressions = 0; 
        //Math.floor(Math.random()*1000)

        //Modifying friendList to json format for inserting into database
        let jsonFriendList = "{";
        for(let i=0; i<user.friends.length; i++){

            jsonFriendList += `"${user.friends[i]}"`;
            if(i != user.friends.length-1) jsonFriendList += `, `;

        }jsonFriendList += "}";

        /*
        //Insert new user Query
        const insertNewUserQuery = `INSERT INTO accountinfo(userid, username, firstname, lastname, email, "password", profileimage, "location", occupation, viewedprofile, impressions, friends)
                                    VALUES ('${user.userID}', '${user.userName}', '${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}', '${user.profileImage}', '${user.location}', '${user.occupation}', ${user.viewedProfile}, ${user.impressions}, '${jsonFriendList}')
                                    RETURNING *`;
        const insertNewUserQueryResult = await pool.query(insertNewUserQuery);
        */
        
        //Granting web token for new logged in user
        const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET_KEY);
        //Deleting password so it does not go to frontend
        delete user.password;

        console.log(user);

        res.status(201).json( {token, user} );

    } catch (err) {
        res.status(500).json({  error: err.message });
    }
}