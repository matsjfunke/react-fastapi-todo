import React from 'react';
import api from '../api';

const TodoList = ({ todos, fetchTodos }) => {
  const handleDeleteTodo = async (id) => {
    try {
      await api.post(`/delete_todo/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <table className='table table-striped table-bordered table-hover'>
      <thead>
        <tr>
          <th>Priority</th>
          <th>Task</th>
          <th>Description</th>
          <th>Completion Status?</th>
          <th>Date?</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) =>(
          <tr key={todo.id}>
            <td>{todo.priority}</td>
            <td>{todo.task}</td>
            <td>{todo.description}</td>
            <td>{todo.completion_status? 'Yes' : 'No'}</td>
            <td>{todo.date}</td>
            <td>
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
