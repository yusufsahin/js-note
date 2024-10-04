const Note = require('../models/noteModel');

class NoteRepository {
  async createNote(noteData) {
    return await Note.create(noteData);
  }

  async getNoteById(noteId) {
    return await Note.findById(noteId);
  }

  async getAllNotes() {
    return await Note.find();
  }

  async updateNote(noteId, noteData) {
    return await Note.findByIdAndUpdate(noteId, noteData, { new: true });
  }

  async deleteNote(noteId) {
    return await Note.findByIdAndDelete(noteId);
  }
}

module.exports = new NoteRepository();
