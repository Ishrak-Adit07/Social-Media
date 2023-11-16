const pool = require("./dbConnection");


const runQuery = async(query) =>{
    try {
        const queryResult = await pool.query(query);
    } catch (err) {
        console.error(err.message);
    }
    return queryResult;
}

module.exports = {runQuery};