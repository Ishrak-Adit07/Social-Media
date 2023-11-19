import express from 'express';
import { createPost, getFeedPosts, getUserPosts, likePost } from '../controllers/post.controller';
const router = express.Router();

//Reminder to add verifyToken
//Creating new post
router.post("/:userid", createPost);

//Reminder to add verifyToken
//Fetching all posts for the feed
router.get("/feedPosts", getFeedPosts);

//Reminder to add verrifyToken
//Fetching posts from a certain user
router.get("/:userid", getUserPosts);

//Reminder to add verifyToken
//Liking or unliking posts
router.put("/:userid", likePost);

export default router;
