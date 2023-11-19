export const post = {
    postID : {
        type : String,
        required : true
    },
    userID : {
        type : String,
        required : true,

    },
    firstName : {
        type : String,
        require : true,
        max : 50
    },
    lastName : {
        type : String,
        require : true,
        max : 50
    },
    profileImage : {
        type : String,
        default : ""
    },
    postImage : {
        type : String,
        default : ""
    },
    likes : {
        type : Array,
        default : []
    },
    commenters : {
        type : Array,
        default : []
    },
    createdOn : {
        type : Date,
        required : true
    },
    location : String, 
    caption : String
}