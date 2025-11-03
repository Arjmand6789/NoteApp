import { useState } from "react";

function Form({ setNotes, notes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      description,
      id: new Date().toISOString(),
      isFinished: false,
    };

    setNotes((prev) => [...prev, newNote]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form className="Form" onSubmit={submitHandler}>
        <div className="FormBox">
          <h1 className="BoxName">Add Your Note</h1>

          <input
            className="Title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Description"
            className="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <input type="submit" className="Submit" value="Add Note" />
        </div>
      </form>
    </div>
  );
}

export default Form;
