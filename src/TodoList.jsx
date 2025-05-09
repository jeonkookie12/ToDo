import { useState } from "react";
import { Trash2 } from "lucide-react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //Add Item to List 
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };
  //Check Item
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //Delete Item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-sm h-[80vh] bg-white rounded-3xl shadow-xl border border-gray-200 flex flex-col p-4">
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-3">
          To Do List
        </h1>
        {/*User Input*/}
        <div className="flex flex-none mb-3 rounded-lg overflow-hidden border border-gray-300">
          <input type="text" className="flex-grow px-3 py-2 text-gray-700 focus:outline-none" placeholder="What to do Today? 🤔"
            value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addTodo()}/>
          <button onClick={addTodo} className="bg-yellow-300 px-4 text-white text-sm hover:bg-yellow-500">
            Add
          </button>
        </div>
        {/*List*/}
        <ul className="flex-grow overflow-y-auto space-y-2 pr-1">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-100 rounded-lg px-3 py-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className="w-5 h-5 accent-yellow-500"/>
                <span className={`${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
                  {todo.text}
                </span>
              </div>
              <button onClick={() => deleteTodo(todo.id)} className="text-red-400 hover:text-red-600">
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;