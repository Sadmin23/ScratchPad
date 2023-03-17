import React, {useState} from "react";

function CreateArea() {

  const [InputText, SetInputText] = useState({
    title: "",
    content: ""
  });

  function handleData(event){
    var name = event.target.name;
    var value = event.target.value;

    SetInputText(prevValue => {
      if (name==="title"){
        return {
          title: value,
          content: prevValue.content
        }
      }
      else if (name==="content"){
        return {
          title: prevValue.title,
          content: value
        }
      }
    });
  }

  return (
    <div>
      <form>
        <input onChange={handleData} name="title" value={InputText.title} placeholder="Title"/>
        <textarea onChange={handleData} name="content" value={InputText.content} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
