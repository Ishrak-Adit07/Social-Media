import pg from 'pg';

export const pool = new pg.Pool({
    user : "postgres",
    password : "adit@postgres",
    host: "localhost", 
    port : 5432,
    database : "owltweet"
});