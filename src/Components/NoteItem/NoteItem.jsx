function NoteItem({ boxNote, onDelete , setNotes }) {


      const handleComplete = (id) => {
        setNotes((prev) =>
          prev.map((note) =>
            note.id === id ? { ...note, isFinished: !note.isFinished } : note
          )
        );
      };
  return (
    <div className="Note">
      <h4>{boxNote.title}</h4>
      <p>{boxNote.description}</p>
      <small>{boxNote.id}</small>

      <button onClick={() => onDelete(boxNote.id)}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
        </svg>
      </button>
      <button>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/material-outlined/50/pencil--v2.png"
          alt="pencil--v2"
        />
      </button>

      <button onClick={() => handleComplete(boxNote.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
        </svg>
      </button>
    </div>
  );
}

export default NoteItem;
