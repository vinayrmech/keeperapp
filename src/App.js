import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handelClick(newItem) {
    setNotes((prevsVal) => {
      return [...prevsVal, newItem];
    });
  }
  function handeldelete(id) {
    setNotes((prevsVal) => {
      return prevsVal.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handelClick} />

      {notes.map((noteItem, index) => (
        <Note
          key={index} // Ensure this is unique
          title={noteItem.title}
          content={noteItem.content}
          id={index}
          deleteItem={handeldelete}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
