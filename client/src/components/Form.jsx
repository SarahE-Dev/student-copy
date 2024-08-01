import {useEffect, useState} from 'react'
import { Container, Form as Fo, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export default function Form(props) {
    // get id
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    // get other props
    const { notesArray, onAdd } = props
    
    const handleOnSubmit = (e) => {
      e.preventDefault()
      // make function call based on condition
      onAdd(title, content)
      window.location.href = '/'
    }
    // add useEffect to set title and content if edit
  return (
    <Container fluid className='bg-black text-white min-vh-100 text-center pt-5'>
        {/* change text based on condition */}
        <h1 className='text-center'>Create Note</h1>
        <div className='d-flex justify-content-center'>
      <Fo onSubmit={handleOnSubmit} style={{width: '50%'}}>
        <Fo.Group>
          <Fo.Label>Title</Fo.Label>
          <Fo.Control value={title} type='text' placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} />
          
        </Fo.Group>

        <Fo.Group>
          <Fo.Label>Content</Fo.Label>
          <Fo.Control value={content} as='textarea' rows='5' placeholder='Enter content' onChange={(e) => setContent(e.target.value)} />
        </Fo.Group>
        <div className='d-flex justify-content-center'>
        <div id='buttons' style={{width: '30%'}} className='d-flex justify-content-between'>
          <Link to='/'>
        <Button className='mt-5' variant='outline-danger' type='button'>
          Cancel
        </Button>
          </Link>
          
        <Button onClick={handleOnSubmit} className='mt-5' variant='outline-primary' type='submit' disabled={!title || !content}>
          {/* change text based on condition */}
          Create
        </Button>
          
        </div>
        </div>
      </Fo>
      </div>
    </Container>
  )
}
