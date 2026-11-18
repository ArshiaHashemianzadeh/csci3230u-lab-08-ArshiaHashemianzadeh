import { useState } from "react";   


export default function AddTodoForm({ onAdd }) {

    const [text, setText] = useState("");

    function handleSubmit(event) {
    event.preventDefault();
    // …call onAdd with input.value (trimmed), then input.value = ""
    const  trimmed = text.trim()  
    if (!trimmed) return; 
    onAdd(trimmed);
    setText("") 



    }
    // <form onSubmit={handleSubmit}>: an <input name="text" placeholder="Add a todo…"> + an "Add" button

    return(
        <form onSubmit={handleSubmit}>
            <input name= "text" placeholder="Add a todo..." value={text} 
            onChange={(e)=>setText(e.target.value)}/>
            <button type="submit">Add</button>
        </form> 
  );
}
