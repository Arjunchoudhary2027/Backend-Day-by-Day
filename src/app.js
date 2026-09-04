const express = require("express")
const app =express()
app.use(express.json())
const notes=[

]
// POST / notes
app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    res.status(201).json({
        message:"User Created Succesfully"
    })    
})

/**GET/notes */
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:notes
    })
})

/** DELETE/notes*/
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    console.log(notes)
    res.status(200).json({
        message:"User Deleted Succesfully",
    })
})

/**PETCH/notes */
app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description= req.body.description
    res.status(200).json({
        message:"User Updated Succesfully"
    })
})


module.exports =app