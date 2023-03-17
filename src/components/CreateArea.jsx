import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

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
        <input onChange={handleData} name="title" value={InputText.title} placeholder="Title"/>
        <textarea onChange={handleData} name="content" value={InputText.content} placeholder="Take a note..." rows="3" />
        <button onClick={SubmitNote}>
          <AddIcon/>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
