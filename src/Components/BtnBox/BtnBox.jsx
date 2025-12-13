import Button from "../Button/Button";
import "./BtnBox.css";
import { useState } from "react";

const filterLabel = [
  { title: "All", id: 1 },
  { title: "Completed", id: 2 },
  { title: "UnCompleted", id: 3 },
];

function BtnBox({ active, setActive }) {
  return (
    <div className="filterButton">
      {filterLabel.map((btn) => (
        <Button
          text={btn.title}
          isActive={btn.id === active}
          onClick={() => setActive(btn.id)}
          key={btn.id}
        />
      ))}
    </div>
  );
}

export default BtnBox;
