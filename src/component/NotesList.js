import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
function NotesList({ notes, handleAddNote, handleDelete }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        ></Note>
      ))}
      <AddNote handleAddNote={handleAddNote}></AddNote>
    </div>
  );
}

export default NotesList;
