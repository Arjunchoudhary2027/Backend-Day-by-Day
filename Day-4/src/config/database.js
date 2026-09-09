const mongoose=require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

function connectToDB(){
    mongoose.connect("mongodb+srv://arjunkumar09386_db_user:G4EsWPXHFqV5IIcM@back-restart.iisvhld.mongodb.net/Day-4")
    .then(()=>{
        console.log("connect to mongooDB");
        
    })
}

module.exports= connectToDB;