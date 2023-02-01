import React from 'react'
import Note from './Note.js'
import AddNote from './AddNote.js'


const NoteList = ({notes ,  handleAddNote , handleDeleteNotes   }) => {
  return (
    <div className='notes-list'>
        {notes.map((note)=>(
        <Note id = {note.id} text = {note.text} date = {note.date}  handleDeleteNotes  = {handleDeleteNotes }/>
        
        ))}
        <AddNote handleAddNote = {handleAddNote} />
        
    </div>
  )
}

export default NoteList
