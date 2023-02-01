import {useEffect, useState} from 'react';
import NoteList from './Component/NoteList.js';
import Search from './Component/Search.js';
import './index.css';
import {nanoid} from "nanoid"

const App = ()=>{
  const [searchText, setSearchText] = useState('');
  const [notes, setNotes] = useState([])

  useEffect(()=>{

    localStorage.setItem('react-note-app-data' , JSON.stringify(notes))

  } , [notes])


  useEffect(()=>{
    const saveNotes = JSON.parse(localStorage.getItem('react-note-app-data'))

    if(saveNotes){
      setNotes(saveNotes)
    }
  },[])

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  };
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNotes = (id)=>{
 const newNotes  = notes.filter((note)=>note.id !== id)
 setNotes(newNotes)

}
  return(

  <div className='container'>
    <Search handleSearchNote={setSearchText} />
    <NoteList 
    notes = {notes.filter((note)=>note.text.toLowerCase().includes(searchText)
      )}
  handleAddNote  = {addNote}
   handleDeleteNotes = {deleteNotes} />

  </div>
  )

}

export default App
