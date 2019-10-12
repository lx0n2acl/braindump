import React from "react";
import NoteCard from "./NoteCard";

const notes = [{ id: 1, title: "item 1", description: "description 1" }, { id: 2, title: "item 2", description: "description 2" }, { id: 3, title: "item 3", description: "description 3" }];
const NoteList = () => {
  return (
    <div>
      {notes.map(n => (
        <NoteCard key={n.id} id={n.id} title={n.title} description={n.description}></NoteCard>
      ))}
    </div>
  );
};
export default NoteList;
