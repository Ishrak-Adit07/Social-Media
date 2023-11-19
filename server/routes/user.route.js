import express from "express";
import { verifyToken } from "../middlewares/authToken";
import { getUser, getUserFriends } from "../controllers/user.controller";
const router = express.Router();

//Reminder to use verifyToken
//Get all information of current User
router.get("/:userid", getUser);

//Reminder to use verifyToken
//Get all friends of current User
router.get("/:userid/friends", getUserFriends);

/*
//Reminder to use verifyToken
//Add or Remove a friend of current User
router.patch("/:id/friendID", verifyToken, addRemoveFriend);
*/

export default router;