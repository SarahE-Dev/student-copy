import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { not } from 'three/examples/jsm/nodes/Nodes.js'
import Note from './Note'

export default function Home(props) {
  const { notesArray, getNotes, onAdd, onEdit, onDelete } = props
  const noteProps = {
    onEdit,
    onDelete,
    notesArray,
    getNotes,
  }
  
  return (
    <Container fluid className='bg-black text-white min-vh-100 text-center'>
        <Link to='/form'>
        <Button variant='primary' className='mt-5'>
            <div className='d-flex justify-content-center align-items-center'>
        <svg style={{marginTop: '2.5px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sticky" viewBox="0 0 16 16">
  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293z"/>
</svg>
          <span className='mx-2'>Create Note</span>
        </div>
        </Button>
        </Link>
        
        {notesArray.map((note, index) => (
          
          <Note key={note._id} id={note._id} {...noteProps} note={note} index={index} />
        ))}
        
    </Container>
  )
}
