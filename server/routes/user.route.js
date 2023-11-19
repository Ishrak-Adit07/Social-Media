import express from "express";
import { verifyToken } from "../middlewares/authToken";
import { getUser, getUserFriends, getUserName, getUserProfileImage } from "../controllers/user.controller";
const router = express.Router();

//Reminder to use verifyToken
//Get all information of current User
router.get("/:userid", getUser);

//Reminder to use verifyToken
//Get all friends of current User
router.get("/:userid/friends", getUserFriends);

//Reminder to use verifyToken
//Get userName by userID
router.get("/:userid/name", getUserName);

//Reminder to use verifyToken
//Get userProfileImage by userID
router.get("/:userid/profileImage", getUserProfileImage);

/*
//Reminder to use verifyToken
//Add or Remove a friend of current User
router.patch("/:id/friendID", verifyToken, addRemoveFriend);
*/

export default router;