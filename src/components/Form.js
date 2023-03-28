import "./Form.css";
import {useState} from "react";

function Form({ setData, todo, setTodo }) {
  const [inputVal, setInputVal] = useState('')
  const submitBtn = (e) => {
    e.preventDefault();
    let item = {
      id: Date.now(),
      text: inputVal,
      selected: false,
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
