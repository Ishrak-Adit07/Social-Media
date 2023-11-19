INSERT INTO accountinfo
(userid, firstname, lastname, email, "password", profileimage, "location", occupation, viewedprofile, impressions, friends)
VALUES ('Luna Lovegood', 'Luna', 'Lovegood', 'll@raven.com', 'llraven', 'imagepath', 'NY', 'Student', 0, 0, 
'{"Harry Potter", "Ron Weasley"}') RETURNING *