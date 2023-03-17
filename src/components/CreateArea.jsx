import React, {useState} from "react";

function CreateArea() {

  const [InputText, SetInputText] = useState("");

  function onInput(event){
    var input=event.target.value;
    SetInputText(input);
  }

  return (
    <div>
      <form>
        <input onChange={onInput} name="title" placeholder="Title" value={InputText}/>
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
