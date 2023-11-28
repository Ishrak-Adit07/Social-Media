import express from "express";
import { verifyToken } from "../middlewares/authToken";
import { addNewFriend, deleteFriend, getUser, getUserFriends, getUserName, getUserProfileImage, getUsersShowInfo, verifynReturnFriend } from "../controllers/user.controller";
const router = express.Router();

//Reminder to use verifyToken
//Get all information of current User
router.get("/:userid", getUser);

//Reminder to use verifyToken
//Get all friends of current User
router.get("/friends/:userid", getUserFriends);

//Reminder to use verifyToken
//Get userName by userID
router.get("/name/:userid", getUserName);

//Reminder to use verifyToken
//Get userProfileImage by userID
router.get("/profileImage/:userid", getUserProfileImage);

router.post("/usersShowInfo", getUsersShowInfo);

//Reminder to use verifyToken
//Verify and Return friend Information
router.get("/verifyFriend/:userid", verifynReturnFriend);

//Reminder to use verifyToken
//Add new friend to user's friendList
router.post("/addNewFriend/:userid", addNewFriend);

//Reminder to use verifyToken
//Delete friend from user's friendList
router.post("/deleteFriend/:userid", deleteFriend);

export default router;