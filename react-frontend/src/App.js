import React, { useState, useEffect } from 'react';
import api from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await api.get('/todos');
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Todo App
          </a>
        </div>
      </nav>

      <div className='container'>
        <TodoForm fetchTodos={fetchTodos} />
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </div>
    </div>
  );
};

export default App;
