import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

 const [Notes, setNotes] = useState([]);

  function addItems(InputText){
    setNotes(prevValue=>{
      return [...prevValue, InputText];
    });

    console.log(InputText);
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addItems}
      />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
