const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const logger = require('morgan')
const cors = require('cors');
const NoteController = require('./routes/Note/Controller/NoteController')

app.use(express.json());
app.use(cors());
app.use(logger('dev'))

mongoose.connect('mongodb://127.0.0.1:27017/presentation-project')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

// if time make note router and hook up

app.get('/api/notes/get-all-notes', NoteController.getAllNotes);

app.post('/api/notes/create-note', NoteController.createNote);

app.delete('/api/notes/delete-note/:id', NoteController.deleteNote);

app.get('/api/notes/get-note-by-id/:id', NoteController.getNoteById);

// make an update path at /api/notes/update-note/:id

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});