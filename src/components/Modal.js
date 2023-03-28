import { useState } from "react";
import "./Form.css";
import "./Modal.css";

function Modal({ modalCloseBtn, item, data, setData, itemId }) {
  const [query, setQuery] = useState(item[0].text);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) {
          return { ...item, text: query };
        }
        return item;
      });
    });
    modalCloseBtn();
  };

  return (
    <div className='modal-form'>
      <h1 className='modal-title'>Edit information</h1>
      <form className='form' onSubmit={handleSubmit}>
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
          value={query}
          autoFocus
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
