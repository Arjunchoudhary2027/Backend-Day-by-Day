const mongoose = require("mongoose")
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

function connectToDB(){
    mongoose.connect("mongodb+srv://arjunkumar09386_db_user:7rX4StV4kPm69ctQ@back-restart.iisvhld.mongodb.net/Day-5")
    .then(()=>{
        console.log("connected to mongooDB"); 
        
    })
}
 

module.exports = connectToDB