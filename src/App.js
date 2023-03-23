import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const modalBtn = () => {
    setShow(true);
  };
  const modalCloseBtn = () => {
    setShow(false);
  };

  const deleteData = (id) => {
    const newData = data.filter((item) => {
      return item.id !== id;
    });
    setData(newData);
  };

  const updateData = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setData(newData);
  };

  const editItem = (id, editText) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, text: editText };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Daily To Do List</h1>
        <Form setData={setData} />
        <TodoList
          data={data}
          updateData={updateData}
          deleteData={deleteData}
          modalBtn={modalBtn}
        />
        {show && (
          <Modal
            modalBtn={modalBtn}
            modalCloseBtn={modalCloseBtn}
            editItem={editItem}
          />
        )}
        <hr />
        <footer>
          <p>Items: {data.length}</p>
          <button
            onClick={() => {
              setData([]);
            }}>
            Clear All
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
