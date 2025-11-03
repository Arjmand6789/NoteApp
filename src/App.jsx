import { useState } from "react";
import "./App.css";
import "./Components/Form/Form.css";
import "./Components/SaveBox/SaveBox.css";
import "./Components/NoteItem/NoteItem.css";
import Form from "./Components/Form/Form";
import SaveBox from "./Components/SaveBox/SaveBox";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
        <SaveBox notes={notes} setNotes={setNotes} />
        <Form notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
