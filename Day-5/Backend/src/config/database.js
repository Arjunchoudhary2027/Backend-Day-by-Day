const mongoose = require("mongoose")
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{   
        console.log("connected to mongooDB"); 
        
    })
}
 

module.exports = connectToDB