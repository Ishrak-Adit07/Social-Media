export const user = {
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
    email : {
        type : String,
        require : true,
        max : 50,
        unique : true
    },
    password : {
        type : String,
        require : true,
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