import { pool } from "../DB Executions/dbConnection";
import { v4 as uuidv4 } from 'uuid';

export const createPost = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const {userName, house, profileImage, postImage, caption, location} = req.body;
        const postID = "post_"+uuidv4();
        
        const storeNewPostQuery = `INSERT INTO owlposts
                                   VALUES ('${postID}', '${userid}', '${userName}', '${house}', '${profileImage}', '${postImage}', 
                                   '${caption}', '${location}', '{}', '{}', Now() )`;
        const storeNewPostQueryResult = await pool.query(storeNewPostQuery);

        res.status(201).json({userid, postID});

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const deletePost = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const {postID} = req.body;

        const deletePostByIDQuery = `DELETE FROM owlposts
                                     WHERE userid = '${userid}'
                                     AND postid = '${postID}'`;
        const deletePostByIDQueryResult = await pool.query(deletePostByIDQuery);

        res.status(201).json({ userid, postID });

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const getFeedPosts = async(req, res) =>{
    try {
        
        const {userid} = req.params;

        const getFeedPostsQuery = `SELECT * FROM owlposts
                                   ORDER BY createdon
                                   LIMIT 20`;
        const getFeedPostsQueryResult = await pool.query(getFeedPostsQuery);

        res.status(200).json(getFeedPostsQueryResult.rows);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const getUserPosts = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        console.log(userid);

        const getUserPostsQuery = `SELECT * FROM owlposts
                                   WHERE userid = '${userid}'
                                   ORDER BY createdon`;
        const getUserPostsQueryResult = await pool.query(getUserPostsQuery);

        res.status(200).json(getUserPostsQueryResult.rows);

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const isLiked = async(req, res)=>{
    try {
        const {userid} = req.params;
        const {postID} = req.body;

        const isLikedQuery = `SELECT * FROM owlposts
                              WHERE '${userid}' = ANY(likers)
                              AND postid = '${postID}'`;
        const isLikedQueryResult = await pool.query(isLikedQuery);

        if(isLikedQueryResult.rows.length >= 1){
            res.status(201).json(true);
        }
        else{
            res.status(202).json(false);
        }
    } catch (err) {
        console.error(err.message);
    }
}

export const likePost = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const {postID, likerID} = req.body;

        const isLikedQuery = `SELECT * FROM owlposts
                              WHERE '${likerID}' = ANY(likers)
                              AND postid = '${postID}'`;
        const isLikedQueryResult = await pool.query(isLikedQuery);

        if(isLikedQueryResult.rows.length == 0){
        const likePostByIDQuery = `UPDATE owlposts
                                   SET likers = ARRAY_APPEND(likers, '${likerID}')
                                   WHERE postid = '${postID}'
                                   AND userid = '${userid}'`;
        const likePostByIDQueryResult = await pool.query(likePostByIDQuery);

        res.status(201).json( true );
        }
        else{
            res.status(201).json( false );
        }

    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const unlikePost = async(req, res) =>{
    try {
        
        const {userid} = req.params;
        const {postID, unlikerID} = req.body;

        const isLikedQuery = `SELECT * FROM owlposts
                              WHERE '${unlikerID}' = ANY(likers)
                              AND postid = '${postID}'`;
        const isLikedQueryResult = await pool.query(isLikedQuery);

        if(isLikedQueryResult.rows.length >= 1){
        const unlikePostByIDQuery = `UPDATE owlposts
                                     SET likers = ARRAY_REMOVE(likers, '${unlikerID}')
                                     WHERE postid = '${postID}'
                                     AND userid = '${userid}'`;
        const unlikePostByIDQueryResult = await pool.query(unlikePostByIDQuery);

        res.status(201).json( true );
        }
        else{
            res.status(201).json( false );
        }



    } catch (err) {
        res.status(404).json({ msg: err.message });
    }
}

export const postLikers = async(req, res) =>{
    try {
        
        const {postid} = req.params;

        const getPostLikersQuery = `SELECT likers
                                    FROM owlposts
                                    WHERE postid = '${postid}'`;
        const getPostLikersQueryResult = await pool.query(getPostLikersQuery);

        const users = getPostLikersQueryResult.rows[0].likers;

        const usersShowInfo = [];
        for(let i=0; i<users.length; i++){
            const userid = users[i];
            const findUserByIDQuery = `SELECT * FROM accountinfo 
                                       WHERE userid = '${userid}'`;
            const findUserByIDQueryResult = await pool.query(findUserByIDQuery);     
            
            delete findUserByIDQueryResult.rows[0].password;
            usersShowInfo.push(findUserByIDQueryResult.rows[0]);
        }

        res.status(200).json(usersShowInfo);
    } catch (err) {
        res.status(404).json({ msg: err.message });
    }


}
