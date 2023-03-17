import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button 
        onClick={() => {
          props.onDelete(props.id)
        }}
      >
        <DeleteIcon style={{opacity: 1.0}}/>
      </button>
    </div>
  );
}

export default Note;
