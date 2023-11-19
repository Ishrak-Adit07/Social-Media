import express from "express";
import { verifyToken } from "../middlewares/authToken";
import { addNewFriend, deleteFriend, getUser, getUserFriends, getUserName, getUserProfileImage, verifynReturnFriend } from "../controllers/user.controller";
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

//Reminder to use verifyToken
//Verify and Return friend Information
router.get("/:userid/verifyFriend", verifynReturnFriend);

//Reminder to use verifyToken
//Add new friend to user's friendList
router.post("/:userid/addNewFriend", addNewFriend);

//Reminder to use verifyToken
//Delete friend from user's friendList
router.post("/:userid/deleteFriend", deleteFriend);

export default router;