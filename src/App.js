import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import List from "./List";


const App = () => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState(JSON.parse(localStorage.getItem("notesList")));


  const addNote = () => {
    
      setNote([
        {
          event: event,
          date: date,
          time: time,
          id: uuidv4(),
        },
        ...note,
      ]);
      
      
      
    
  };
  useEffect(()=>{
    
    localStorage.setItem("notesList", JSON.stringify(note))
    
  },[note])
  
 



  const handlerKeyDown = (e) =>{
    if(e.key === "Enter"){
      addNote()
    }
    
  }

  const delNote = (id) => {
    const newNote = note.filter((list) => list.id !== id);
    setNote(newNote);
  };

  

  return (
    <div className="App">
      <h2>備忘錄</h2>

      <div className="Form">
        <p>事件: </p>
        <input type="text" onChange={(e) => setEvent(e.target.value)} onKeyDown={handlerKeyDown} />
        <p>日期: </p>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <p>時間: </p>
        <input type="time" onChange={(e) => setTime(e.target.value)} />
        <div className="sumbit">
          <button className="sumbitbutton" onClick={addNote} >
            新增
          </button>
        </div>
      </div>
      <List showNotes={note} del={delNote} />
    </div>
  );
};

export default App;
