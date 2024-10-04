const noteRepository = require('../repositories/noteRepository');

class NoteService {
  async createNote(noteData) {
    return await noteRepository.createNote(noteData);
  }

  async getAllNotes() {
    return await noteRepository.getAllNotes();
  }

  async getNoteById(noteId) {
    const note = await noteRepository.getNoteById(noteId);
    if (!note) {
      throw new Error('Note not found');
    }
    return note;
  }

  async updateNote(noteId, noteData) {
    const updatedNote = await noteRepository.updateNote(noteId, noteData);
    if (!updatedNote) {
      throw new Error('Note not found');
    }
    return updatedNote;
  }

  async deleteNote(noteId) {
    const deletedNote = await noteRepository.deleteNote(noteId);
    if (!deletedNote) {
      throw new Error('Note not found');
    }
    return deletedNote;
  }
}

module.exports = new NoteService();
