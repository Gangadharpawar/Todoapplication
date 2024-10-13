import React from "react";
import { useState } from "react";
import { MdSave } from "react-icons/md";
function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const charLimit = 300;
  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <>
      <div className="note new">
        <textarea
          cols="10"
          rows="8"
          placeholder="typer to add new  notes...."
          onChange={handleChange}
          value={noteText}
        ></textarea>
        <div className="note-footer">
          <small>{charLimit - noteText.length} Remaining</small>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      </div>
    </>
  );
}

export default AddNote;
