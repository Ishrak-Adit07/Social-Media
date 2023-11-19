import { pool } from "../DB Executions/dbConnection";
import { user } from "../models/user.model";

export const getUser = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const findUserByIDQuery = `SELECT * FROM accountinfo 
                                   WHERE userid = '${userid}'`;
        const findUserByIDQueryResult = await pool.query(findUserByIDQuery);      

        delete user.password;
        delete findUserByIDQueryResult.rows[0].password;
        res.status(201).json(findUserByIDQueryResult.rows[0]);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const getUserFriends = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const findFriendsByIDQuery = `SELECT friends FROM accountinfo 
                                      WHERE userid = '${userid}'`;
        const findFriendsByIDQueryResult = await pool.query(findFriendsByIDQuery);

        /*//Returning userID and userName of all friends together, not working currently
        let FriendSPartialInfo = [];
        findFriendsByIDQueryResult.rows[0].friends.map(async(friendsID) =>{
            const friendPartialInfoQuery = `SELECT username, userid FROM accountinfo 
                                            WHERE userid = '${friendsID}'`;
            const friendPartialInfoQueryResult = await pool.query(friendPartialInfoQuery);

            FriendSPartialInfo.push(friendPartialInfoQueryResult.rows[0]);
        });
        //res.status(201).json(FriendSPartialInfo);
        */

        res.status(201).json(findFriendsByIDQueryResult.rows[0]);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}