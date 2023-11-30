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
        res.status(200).json(findUserByIDQueryResult.rows[0]);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}


export const getUsersShowInfo = async(req, res) =>{
    try {
        
        const {users} = req.body;
        const usersShowInfo = [];
    
        for(let i=0; i<users.length; i++){
            const userid = users[i];
            const findUserByIDQuery = `SELECT * FROM accountinfo 
                                       WHERE userid = '${userid}'`;
            const findUserByIDQueryResult = await pool.query(findUserByIDQuery);     
            
            delete findUserByIDQueryResult.rows[0].password;
            console.log(findUserByIDQueryResult.rows);
            usersShowInfo.push(findUserByIDQueryResult.rows[0]);
        }

        res.status(200).json(usersShowInfo);
    } catch (err) {
        console.error(err.message);
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

        res.status(200).json(findFriendsByIDQueryResult.rows);

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

        res.status(200).json(userNameByIDQueryResult.rows[0]);

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

        res.status(200).json(userImageByIDQueryResult.rows[0]);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const verifynReturnFriend = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const {secondID} = req.body;
        const verifyFriendQuery = `SELECT * FROM accountinfo
                                   WHERE '${userid}' = ANY(friends)
                                   AND userid = '${secondID}'`;
        const verifyFriendQueryResult = await pool.query(verifyFriendQuery);

        delete verifyFriendQueryResult.rows[0].password;
        res.status(201).json(verifyFriendQueryResult.rows[0]);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}


export const addNewFriend = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const {newFriendsID} = req.body;

        //Enlisting friendID as user's friend
        const addNewFriendQuery1 = `UPDATE accountInfo
                                    SET friends = ARRAY_APPEND(friends, '${newFriendsID}')
                                    WHERE userid = '${userid}'`;
        const addNewFriendQueryResult1 = await pool.query(addNewFriendQuery1);

        //Enlisting userID as friendID's friend
        const addNewFriendQuery2 = `UPDATE accountInfo
                                    SET friends = ARRAY_APPEND(friends, '${userid}')
                                    WHERE userid = '${newFriendsID}'`;
        const addNewFriendQueryResult2 = await pool.query(addNewFriendQuery2);
      
        res.status(201).json({userid, newFriendsID});

    } catch (err) {
        res.status(404).json( {msg: err.message} );
    }
}

export const deleteFriend = async(req, res) =>{
    try {

        const {userid} = req.params;
        const {deletedFriendID} = req.body;
        
        //Deleting friendID from user's friendList
        const deleteFriendByIDQuery1 = `UPDATE accountInfo
                                       SET friends = ARRAY_REMOVE(friends, '${deletedFriendID}')
                                       WHERE userid = '${userid}'`;
        const deleteFriendByIDQueryResult1 = await pool.query(deleteFriendByIDQuery1);

        //Deleting userID from friend's friendList
        const deleteFriendByIDQuery2 = `UPDATE accountInfo
                                        SET friends = ARRAY_REMOVE(friends, '${userid}')
                                        WHERE userid = '${deletedFriendID}'`;
        const deleteFriendByIDQueryResult2 = await pool.query(deleteFriendByIDQuery2);
        
        res.status(201).json({userid, deletedFriendID});

    } catch (err) {
        res.status(404).json( {msg: err.message} );
    }
}