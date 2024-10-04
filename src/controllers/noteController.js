const express = require('express');
const noteService = require('../services/noteService');

const router = express.Router();

// Create a new note
router.post('/', async (req, res) => {
  try {
    const newNote = await noteService.createNote(req.body);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a note by ID
router.get('/:id', async (req, res) => {
  try {
    const note = await noteService.getNoteById(req.params.id);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a note by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedNote = await noteService.updateNote(req.params.id, req.body);
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a note by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedNote = await noteService.deleteNote(req.params.id);
    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
