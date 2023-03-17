import React, {useState} from "react";

function CreateArea(props) {

  const [InputText, SetInputText] = useState({
    title: "",
    content: ""
  });

  function handleData(event){
    const { name, value } = event.target;

    SetInputText(prevValue => {
        return {
          ...prevValue,
          [name]: value
        }
    });
  }

  return (
    <div>
      <form>
        <input onChange={handleData} name="title" value={InputText.title} placeholder="Title"/>
        <textarea onChange={handleData} name="content" value={InputText.content} placeholder="Take a note..." rows="3" />
        <button 
          onClick={()=>{
            props.onAdd(InputText);
            SetInputText("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
