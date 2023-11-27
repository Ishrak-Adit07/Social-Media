import express from 'express';
import { createPost, deletePost, getFeedPosts, getUserPosts, likePost, unlikePost } from '../controllers/post.controller';
const router = express.Router();

//Reminder to add verifyToken
//Creating new post or Deleting post
router.post("/createPost/:userid", createPost);
router.delete("/deletePost/:userid", deletePost);

//Reminder to add verifyToken
//Fetching all posts for the feed
router.get("/feedPosts", getFeedPosts);

//Reminder to add verrifyToken
//Fetching posts from a certain user
router.get("/userPosts/:userid", getUserPosts);

//Reminder to add verifyToken
//Liking or Unliking posts
router.put("/like/:userid", likePost);
router.put("/unlike/:userid", unlikePost)


export default router;
