import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

 const [Notes, setNotes] = useState([]);

  function addNotes(InputText){
    setNotes(prevValue=>{
      return [...prevValue, InputText];
    });

    console.log(InputText);
  }

  function deleteNotes(id){
    setNotes(prevValue => {
      return Notes.filter((items, index)=>{
        return index!==id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNotes}
      />
      {Notes.map(note => (
        <Note title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
