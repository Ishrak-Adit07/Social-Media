const app = require('./app');
const PORT = 4000;

app.listen(PORT, (req, res)=>{
    console.log(`Social Media server is running at http://localhost:${PORT}`);
});