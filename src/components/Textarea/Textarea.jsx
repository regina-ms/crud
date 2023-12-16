import React from 'react'

export default function Textarea({ refs, handlerClick }) {
  return (
    <div className='textarea'>
      <textarea ref={refs}></textarea>
      <button onClick={handlerClick}>➤</button>
    </div>
  )
}
