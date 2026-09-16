const express=require("express");
const notesModel = require("./model/notes.js");
const cors = require("cors")

const app=express()
app.use(express.json());
app.use(cors());

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

/**PATCH/NOTES UPDATE */
app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {title} =req.body
     await notesModel.findByIdAndUpdate( id, {title} )
    res.status(200).json({
        message: "Note update successfully"
    })
})

/**DELETE/NOTES */
app.delete("/notes/:id",async(req,res)=>{
    const id =req.params.id
    await notesModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Note Delete"
    })
})



module.exports=app;