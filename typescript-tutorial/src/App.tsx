import React, { useState } from 'react';
import './App.css';
import './components/InputFeild';
import InputFeild from './components/InputFeild';
import { Todo } from './model'
import TodoList from './components/TodoList';

// React.FC is an react type

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskfiy</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
