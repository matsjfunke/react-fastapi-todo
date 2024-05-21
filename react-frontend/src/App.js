import React, {useState, useEffect} from 'react'
import api from './api'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    priority: '',
    task: '',
    description: '',
    completion_status: false,
    date: ''
  });

  const fetchTodos= async () => {
    const response = await api.get('/todos');
    setTodos(response.data)
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  }

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

  const handleDeleteTodo = async (id) => {
    try {
      await api.post(`/delete_todo/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Failed to delete todo:", error);
      }
  };

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
          <input type='checkbox' id='completion_status' name='completion_status' onChange={handleInputChange} value={formData.completion_status}/>
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
          {todos.map((todos) =>(
            <tr key={todos.id}>
              <td>{todos.priority}</td>
              <td>{todos.task}</td>
              <td>{todos.description}</td>
              <td>{todos.completion_status? 'Yes' : 'No'}</td>
              <td>{todos.date}</td>
              <td>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleDeleteTodo(todos.id)}
                >
                    Delete
                  </button>
                </td>
            </tr>
          ))}
        </tbody>

      </table>



    </div>


    </div>
  )

}

export default App;
