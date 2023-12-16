import React from 'react'

export default function NoteItem({ id, content, deleteItem }) {
    return (
        <li className='note-item' key={id}>
            {content}
            <button onClick={deleteItem}>X</button>
        </li>
    )
}
