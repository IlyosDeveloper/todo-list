import { useState } from "react";
import Modal from "./Modal";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList({ data, updateData, setData, deleteData, editItem }) {
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState(0);

  const modalBtn = () => {
    setShow(true);
  };

  const modalCloseBtn = () => {
    setShow(false);
  };

  return (
    <ul className='list'>
      {data &&
        data.map((todo) => {
          return <Todo todo={todo} updateData={updateData} deleteData={deleteData} setItemId={setItemId} modalBtn={modalBtn}/>
        })}

      {show && (
        <Modal
          modalCloseBtn={modalCloseBtn}
          item={data.filter((item) => item.id == itemId)}
          setData={setData}
          itemId={itemId}
        />
      )}
    </ul>
  );
}

export default TodoList;
