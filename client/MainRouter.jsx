import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import Form from './src/components/Form'
import axios from 'axios'
import Note from './src/components/Note'

export default function MainRouter() {
    const [notesArray, setNotesArray] = useState([])
    const onAdd = async (title, content) => {
        try {
            const response = await axios.post('http://localhost:3000/api/notes/create-note', {title, content})
            const newNotesArray = [...notesArray, response.data]
            setNotesArray(newNotesArray)
        } catch (error) {
            console.log(error)
        }
        
    }
    const getNotes = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/notes/get-all-notes')
            console.log(response.data)
            setNotesArray(response.data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        getNotes()
    }, [])
    const onDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/notes/delete-note/${id}`)
        console.log(response.data)
            const newNotesArray = notesArray.filter(note => note._id !== id)
            setNotesArray(newNotesArray)
        } catch (error) {
            console.log(error)
        }
        
    }
    const getById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/notes/get-note-by-id/${id}`)
        return response.data
        } catch (error) {
            console.log(error)
        }
        
    }
    // make an onEdit function
    
    // make a new object for the edit props
    const addProps = {
        onAdd,
    }
    const homeProps = {
        notesArray,
        onDelete,
        // add onEdit function
        getNotes,
    }
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home {...homeProps} />} />
            <Route path="/form" element={<Form {...addProps} />} />
            {/* make a path for edit and add props */}
        </Routes>
    </Router>
  )
}
