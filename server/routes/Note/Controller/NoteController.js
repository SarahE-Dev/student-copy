const Note = require('../Model/Schema')

async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving notes' });
  }
}
 
async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving note' });
  }
}
 
async function createNote(req, res) {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: 'Error creating note' });
  }
}
 
async function deleteNote(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (note) {
      res.status(200).json({ message: 'Note deleted' });
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting note' });
  }
}

// make and update function and export it

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
}