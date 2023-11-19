export const user = {
    userID : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true,
        max : 50
    },
    firstName : {
        type : String,
        required : true,
        max : 50
    },
    lastName : {
        type : String,
        required : true,
        max : 50
    },
    email : {
        type : String,
        required : true,
        max : 50,
        unique : true
    },
    password : {
        type : String,
        required : true,
        max : 50
    },
    profileImage : {
        type : String,
        default : ""
    },
    friends : {
        type : Array,
        default : []
    },
    location : String,
    occupation : String,
    viewedProfile : Number,
    impressions : Number
}