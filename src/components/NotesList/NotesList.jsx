import React, { useEffect, useRef, useState } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import Textarea from '../Textarea/Textarea';

export default function NotesList() {
    const [state, setState] = useState([]);
    const textareaRef = useRef();

    const loadNotes = () => {
        fetch('http://localhost:7070/notes').then((res) => res.json()).then(result => {
            setState(result);
            textareaRef.current.value = ""
            
        })
    }

    const sendNotes = () => {
        fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: 0,
                content: textareaRef.current.value
            })
        }).then(loadNotes)
    }

    const deleteNote = (id) => {
        fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE'
        }).then(loadNotes)
    }

    useEffect(loadNotes, []);

    return (
        <>
            <h1>Notes</h1>
            <ul className='notes-list'>
                {
                    state.map((el) => (<NoteItem key={el.id} {...el} deleteItem={() => deleteNote(el.id)} />))
                }
            </ul>
            <Textarea refs={textareaRef} handlerClick={sendNotes}/>
        </>
    )
}