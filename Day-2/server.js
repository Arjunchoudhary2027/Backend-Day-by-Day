const express =require("express")
const app=express()
app.use(express.json())

const notes=[

]

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("notes created", notes)
})


app.get("/notes",(req,res)=>{
    res.send(notes)
})


app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index];
    res.send("Note deleted succesfully", notes);
})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].roll=req.body.roll;
    res.send("Note updated succesfully", notes)
})

app.listen(3000,()=>{
    console.log("server started");
    
})
