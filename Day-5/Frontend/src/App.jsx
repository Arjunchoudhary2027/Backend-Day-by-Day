import  ("./App.css")
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"



function App() {
  const [notes,setNotes]= useState([
    {
      title: "test title 1",
      description:"test description"
    },
        {
      title: "test title 1",
      description:"test description"
    },
        {
      title: "test title 1",
      description:"test description"
    },
        {
      title: "test title 1",
      description:"test description"
    }
  ])

  function fetchNotes(){
  axios.get("http://localhost:3000/notes")
  .then(res=>{
    setNotes(res.data.notes)
     })
  }
useEffect(()=>{
 fetchNotes()
  },[])

  function handleSubmit(e){
    e.preventDefault()

    const{title,description} = e.target.elements

    console.log(title.value,description.value)

    axios.post("http://localhost:3000/notes",{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data);
      fetchNotes()
    })
  }

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/notes/" + noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
  }

  return (
    <>
     <form className='note-create-form' onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder="Enter title" />
      <input name='description' type="text" placeholder="Enter description" />
      <button>Create note</button>
     </form>
      <div className="main-box">
        {
          notes.map(note=>{
         return <div className="box">
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          <button onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
        </div>
         })
        }
      </div>
    </>
  )
}

export default App
