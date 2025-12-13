import { useState } from "react"; 
import BtnBox from "../BtnBox/BtnBox";
import NoteItem from "../NoteItem/NoteItem";

function SaveBox({ notes, setNotes }) {
  const [active, setActive] = useState(1);

  const handleDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  let filteredNotes = [];

  switch (active) {
    case 1:
      filteredNotes = notes;
      break;
    case 2:
      filteredNotes = notes.filter((note) => note.isFinished);
      break;
    case 3:
      filteredNotes = notes.filter((note) => !note.isFinished);
      break;
    default:
      filteredNotes = notes;
      break;
  }

  return (
    <div className="SaveBox">
      <h1 className="MyNotes">
        Your Notes : <span>{notes.length}</span>
      </h1>

      <BtnBox active={active} setActive={setActive} />

      <div className="items">
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            boxNote={note}
            onDelete={handleDelete}
            setNotes={setNotes}
          />
        ))}
      </div>
    </div>
  );
}

export default SaveBox;
