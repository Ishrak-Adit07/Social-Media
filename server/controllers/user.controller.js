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
        const findFriendsByIDQuery = `SELECT friends 
                                      FROM accountinfo 
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

        res.status(201).json(findFriendsByIDQueryResult.rows);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const getUserName = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const userNameByIDQuery = `SELECT username FROM accountinfo 
                                   WHERE userid = '${userid}'`;
        const userNameByIDQueryResult = await pool.query(userNameByIDQuery);

        res.status(201).json(userNameByIDQueryResult.rows[0]);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const getUserProfileImage = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const userImageByIDQuery = `SELECT profileimage FROM accountinfo 
                                    WHERE userid = '${userid}'`;
        const userImageByIDQueryResult = await pool.query(userImageByIDQuery);

        res.status(201).json(userImageByIDQueryResult.rows[0]);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}


export const addNewFriend = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const {newFriendsID} = req.body;

        const addNewFriendQuery = `UPDATE accountInfo
                                   SET friends = ARRAY_APPEND(friends, '${newFriendsID}')
                                   WHERE userid = '${userid}'`;
        const addNewFriendQueryResult = await pool.query(addNewFriendQuery);

        
        res.status(201).json({userid, newFriendsID});

    } catch (err) {
        res.status(404).json( {msg: err.message} );
    }
}

export const deleteFriend = async(req, res) =>{
    try {

        const {userid} = req.params;
        const {deletedFriendID} = req.body;
        
        const deleteFriendByIDQuery = `UPDATE accountInfo
                                       SET friends = ARRAY_REMOVE(friends, '${deletedFriendID}')
                                       WHERE userid = '${userid}'`;
        const deleteFriendByIDQueryResult = await pool.query(deleteFriendByIDQuery);
        
        res.status(201).json({userid, deletedFriendID});

    } catch (err) {
        res.status(404).json( {msg: err.message} );
    }
}