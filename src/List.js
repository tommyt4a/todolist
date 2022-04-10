import React, { useEffect, useState } from "react";
import "./List.css";

export default function List({ showNotes, del }) {
  const deleteNote = (id) => {
    del(id);
  };
  return (
    <>
      {showNotes &&
        showNotes.map((note) => (
          <div key={note.id} className="noteList">
            {note.event}
            <br />
            <div className="dateTime">
              <div className="date">{note.date}</div>
              <div>{note.time}</div>
              <button onClick={() => deleteNote(note.id)}>刪除</button>
            </div>
          </div>
        ))}
    </>
  );
}
