require("dotenv").config();

const  connectToDB=require("./src/config/database.js");
const app=require("./src/app.js");

  connectToDB();
  
app.listen(3000,()=>{
    console.log("server started on port 3000");
})

