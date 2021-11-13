import React, {useState, useEffect} from 'react'
import './styles/Notes.css'

const Notes = () => {
    const [notes, changeNotes] = useState('space to your notes')
    const handleTextArea = (e) => {
        changeNotes(e.target.value)
        localStorage.setItem("notes", notes)
    }
    useEffect(() => {
        changeNotes(localStorage.getItem("notes"))
    },[])
    return (
        <div className='notes'>
            <textarea value={notes} onChange={handleTextArea}>
            </textarea>
        </div>
    )
}

export default Notes;