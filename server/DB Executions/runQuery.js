import {pool} from './dbConnection'

export const runQuery = async(req, res) =>{
    try {
        const queryResult = await pool.query(query);
        console.log("Printing from runquery function");
        console.log(queryResult.rows);
    } catch (err) {
        console.error(err.message);
    }
    return queryResult;
}