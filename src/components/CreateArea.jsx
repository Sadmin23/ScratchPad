import React, {useState} from "react";

function CreateArea(props) {

  const [expand, setExapand] = useState(true);

  function updateForm(){
    setExapand(false);
  }

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

  function SubmitNote(event){
    props.onAdd(InputText);
    event.preventDefault();

    if (InputText.title!=="" && InputText.content!==""){
      SetInputText({
        title: "",
        content: ""
      });
    }
  }

  return (
    <div>
      <form className="create-note">
        { expand ? 
            <textarea onClick={updateForm} onChange={handleData} name="content" value={InputText.content} placeholder="Take a note..." rows="1" /> 
          : 
            <div>         
              <input onChange={handleData} name="title" value={InputText.title} placeholder="Title"/>
              <textarea onClick={updateForm} onChange={handleData} name="content" value={InputText.content} placeholder="Take a note..." rows="3" />
              <button onClick={SubmitNote}>
                +
              </button>
            </div>
        }
          

      </form>
    </div>
  );
}

export default CreateArea;
