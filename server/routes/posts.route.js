import express from 'express';
import { createPost, deletePost, getFeedPosts, getUserPosts, likePost, unlikePost } from '../controllers/post.controller';
const router = express.Router();

//Reminder to add verifyToken
//Creating new post or Deleting post
router.post("/:userid/createPost", createPost);
router.delete("/:userid/deletePost", deletePost);

//Reminder to add verifyToken
//Fetching all posts for the feed
router.get("/feedPosts", getFeedPosts);

//Reminder to add verrifyToken
//Fetching posts from a certain user
router.get("/:userid", getUserPosts);

//Reminder to add verifyToken
//Liking or Unliking posts
router.put("/:userid/like", likePost);
router.put("/:userid/unlike", unlikePost)


export default router;
