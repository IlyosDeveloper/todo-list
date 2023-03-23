import { useState } from "react";
import "./Form.css";
import "./Modal.css";

function Modal({ modalCloseBtn, itemId, editItem }) {
  const [query, setQuery] = useState("");

  const renameTodo = (e) => {
    e.preventDefault();
    console.log(query);
    modalCloseBtn();
    editItem(itemId,query);
  };

  return (
    <div className='modal-form'>
      <h1 className='modal-title'>Edit information</h1>
      <form onSubmit={renameTodo} className='form'>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className='input'
          id='todo'
          type='text'
          placeholder='Add new list item'
          required
          autoComplete='off'
        />
        <button type='submit' className='btn'>
          Add
        </button>
      </form>
      <button onClick={modalCloseBtn} className='btn'>
        Close
      </button>
    </div>
  );
}

export default Modal;
