import NoteItem from "../NoteItem/NoteItem";

function SaveBox({ notes, setNotes }) {
  const handleDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="SaveBox">
      <h1 className="MyNotes">
        Your Notes : <span>{notes.length}</span>
      </h1>

      <div className="items">
        {notes.map((note) => (
          <NoteItem key={note.id} boxNote={note} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default SaveBox;
