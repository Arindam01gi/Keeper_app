import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Entry from "./Entry";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <Note />

      {notes.map((entries) => (
        <Entry
          key={entries.id}
          title={entries.title}
          content={entries.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
