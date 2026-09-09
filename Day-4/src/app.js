const express=require("express");
const notesModel = require("./model/notes.js");

const app=express()
app.use(express.json());

/**POST/NOTES */
app.post("/notes", async (req,res)=>{
    const {title,description}=req.body;
    const notes=  await notesModel.create({
        title,
        description
    })
    res.status(201).json({
        message:"note created successfully",
        notes
    })
})


/**GET/NOTES */

app.get("/notes",async(req,res)=>{
    const notes = await notesModel.find();

    res.status(200).json({
        message:"Notes fetched successfully",
        notes
    })
})



module.exports=app;