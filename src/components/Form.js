import { useState } from "react";
import "./Form.css";
import React from "react";

function Form({ setData }) {
  const [todo, setTodo] = useState("");

  const submitBtn = (e) => {
    let item = {
      id: Date.now(),
      text: todo,
      selected: false,
    };
    setData((prev)=>{
        return [...prev, item];
    });
    e.preventDefault();
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={submitBtn} className='form'>
        <input
          onChange={(e) => setTodo(e.target.value)}
          className='input'
          id='todo'
          type='text'
          placeholder='Add new list item'
          required
          autoComplete='off'
          value={todo}
        />
        <button type='submit' className='btn'>
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
