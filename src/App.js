import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");
  const [dateState, setDateState] = useState(new Date());
 

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
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 900);
  }, []);
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Daily To Do List</h1>
        <h3 className='time'>
          <p>
            {dateState.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
            })}
          </p>
        </h3>
        <Form setData={setData} todo={todo} setTodo={setTodo} />
        <TodoList
          data={data}
          updateData={updateData}
          deleteData={deleteData}
          setData={setData}
        />

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
