import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(newNote){
    return (
        <Note
            title={newNote.title}
            content={newNote.content}
        />
    );
}

function App(){
    return (
        <div>
            <Header/>
            {notes.map(createNote)}
            <Footer />
        </div>
    );
};

export default App;