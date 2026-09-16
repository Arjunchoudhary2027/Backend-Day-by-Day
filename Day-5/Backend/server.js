const app= require("./src/app.js")
const dns = require("dns");
const connectToDB = require("./src/config/database.js");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


connectToDB()

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})