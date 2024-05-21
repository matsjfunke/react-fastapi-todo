import React, { useState } from 'react';
import api from '../api';

const TodoForm = ({ fetchTodos }) => {
  const [formData, setFormData] = useState({
    priority: '',
    task: '',
    description: '',
    completion_status: false,
    date: ''
  });

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await api.post('/todos', formData);
    fetchTodos();
    setFormData({
      priority: '',
      task: '',
      description: '',
      completion_status: false,
      date: ''
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='mb-3 mt-3'>
        <label htmlFor='amount' className='form-label'>
          Priority
        </label>
        <input type='text' className='form-control' id='priority' name='priority' onChange={handleInputChange} value={formData.priority}/>
      </div>

      <div className='mb-3 mt-3'>
        <label htmlFor='category' className='form-label'>
          Task
        </label>
        <input type='text' className='form-control' id='task' name='task' onChange={handleInputChange} value={formData.task}/>
      </div>

      <div className='mb-3 mt-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input type='text' className='form-control' id='description' name='description' onChange={handleInputChange} value={formData.description}/>
      </div>

      <div className='mb-3 mt-3'>
        <label htmlFor='is_income' className='form-label'>
          Completion Status?
        </label>
        <input type='checkbox' id='completion_status' name='completion_status' onChange={handleInputChange} checked={formData.completion_status}/>
      </div>

      <div className='mb-3 mt-3'>
        <label htmlFor='date' className='form-label'>
          Date
        </label>
        <input type='text' className='form-control' id='date' name='date' onChange={handleInputChange} value={formData.date}/>
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
