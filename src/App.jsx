import { useState , useEffect } from "react";
import "./App.css";
import "./Components/Form/Form.css";
import "./Components/SaveBox/SaveBox.css";
import "./Components/NoteItem/NoteItem.css";
import Form from "./Components/Form/Form";
import SaveBox from "./Components/SaveBox/SaveBox";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div>
        <Form notes={notes} setNotes={setNotes} />
        <SaveBox notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
}

export default App;
