import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { user } from '../models/user.model';
import { pool } from '../DB Executions/dbConnection';
import { runQuery } from '../DB Executions/runQuery';

export const signUp = async(req, res) =>{
    try {

        
        //New Mail Validity Inspection
        user.email = req.body.email;
        const newMailValidityQuery = `SELECT * FROM accountinfo 
                                      WHERE email = '${user.email}'`;
        const newMailValidityQueryResult = await pool.query(newMailValidityQuery);
        if(newMailValidityQueryResult.rows.length != 0) res.status(500).json({  msg: "Mail is already in use" });
        
        //Encrypting password for storing in database
        const password = req.body.password;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        //Accessing rest of information from signup request body
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

        //Modifying friendList to json format for inserting into database
        let jsonFriendList = "{";
        for(let i=0; i<user.friends.length; i++){

            jsonFriendList += `"${user.friends[i]}"`;
            if(i != user.friends.length-1) jsonFriendList += `, `;

        }jsonFriendList += "}";


        //Insert new user Query
        const insertNewUserQuery = `INSERT INTO accountinfo(userid, firstname, lastname, email, "password", profileimage, "location", occupation, viewedprofile, impressions, friends)
                                    VALUES ('${user.userid}', '${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}', '${user.profileImage}', '${user.location}', '${user.occupation}', ${user.viewedProfile}, ${user.impressions}, '${jsonFriendList}')
                                    RETURNING *`;
        const insertNewUserQueryResult = await pool.query(insertNewUserQuery);
        console.log(insertNewUserQueryResult.rows);
        
        //Response with user information
        res.status(201).json(user);

    } catch (err) {
        res.status(500).json({  error: err.message });
    }
}