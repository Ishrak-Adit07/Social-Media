CREATE DATABASE owltweet;

CREATE TABLE AccountInfo(
    userNo SERIAL,
    userID VARCHAR(255) PRIMARY KEY,
    userName VARCHAR(255),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    profileImage VARCHAR(255),
    location VARCHAR(255),
    occupation VARCHAR(255),
    viewedProfile NUMERIC,
    impressions NUMERIC,
    friends VARCHAR[]
);

CREATE TABLE owlPosts(
    postID VARCHAR(255),
    userID VARCHAR(255),
    userName VARCHAR(255),
    house VARCHAR(255),
    profileImage VARCHAR(255),
    postImage VARCHAR(255),
    caption VARCHAR(255),
    location VARCHAR(255),
    likers VARCHAR[],
    commenters VARCHAR[],
    createdon DATE
);

CREATE TABLE Images(
    imageID SERIAL PRIMARY KEY,
    userID VARCHAR(255),
    imagePath VARCHAR(255)
);

INSERT INTO accountinfo(userid, firstname, lastname, email, "password", profileimage, "location", occupation, viewedprofile, impressions, friends)
VALUES ('Luna Lovegood', 'Luna', 'Lovegood', 'll@raven.com', 'lovegood', '', 'ny', 'student', 0, 0, '{"Potter", "Granger", "Weasley"}')