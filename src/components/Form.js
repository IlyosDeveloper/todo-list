import "./Form.css";
import { useState } from "react";

function Form({ setData }) {
  const [inputVal, setInputVal] = useState("");
  
  const submitBtn = (e) => {
    e.preventDefault();

    const dateState = new Date()

    let item = {
      id: Date.now(),
      text: inputVal,
      selected: false,
      time: `${dateState.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })}, ${dateState.toLocaleString("en-GB", {
        day: "numeric",
        month: "numeric",
      })}`,
    };

    setInputVal("");
    setData((prev) => {
      return [...prev, item];
    });
  };
  return (
    <div>
      <form onSubmit={submitBtn} className='form'>
        <input
          onChange={(e) => setInputVal(e.target.value)}
          className='input'
          id='todo'
          type='text'
          placeholder='Add new list item'
          required
          autoComplete='off'
          value={inputVal}
        />
        <button type='submit' className='btn'>
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
