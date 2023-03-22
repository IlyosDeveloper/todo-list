import React from "react";
import "./Form.css";
import "./Modal.css";

function Modal({ modalOpenBtn }) {
  return (
    <div className='modal-form'>
      <h1 className='modal-title'>Edit information</h1>
      <form className='form'>
        <input
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
      <button
        onClick= {modalOpenBtn}
        className='btn'>
        Close
      </button>
    </div>
  );
}

export default Modal;
