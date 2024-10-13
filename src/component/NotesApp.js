import React, { useEffect } from "react";
import { useState } from "react";
import NotesList from "./NotesList";
import Searchnotes from "./Searchnotes";
import "../css/NotesApp.css";
import NotesHeader from "./NotesHeader";
import { nanoid } from "nanoid";
function NotesApp() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "my 1st note",
      date: "10/08/2024",
    },
    {
      id: nanoid(),
      text: "my 2nd note",
      date: "10/08/2024",
    },
    {
      id: nanoid(),
      text: "my 3rd note",
      date: "10/08/2024",
    },
  ]);
  const [searchnote, setSearchnote] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <NotesHeader handleToggleDarkMode={setDarkMode} />
        <Searchnotes handleSearch={setSearchnote} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchnote)
          )}
          handleAddNote={addNote}
          handleDelete={deletingNote}
        ></NotesList>
      </div>
    </div>
  );
}

export default NotesApp;
