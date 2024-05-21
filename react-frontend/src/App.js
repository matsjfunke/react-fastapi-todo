import React, {useState, useEffect} from 'react'
import api from './api'

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    priority: '',
    task: '',
    description: '',
    completion_status: false,
    date: ''
  });

  const fetchTransactions = async () => {
    const response = await api.get('/todos');
    setTransactions(response.data)
  };

  useEffect(() => {
    fetchTransactions();
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
    fetchTransactions();
    setFormData({
      priority: '',
      task: '',
      description: '',
      completion_status: false,
      date: ''
    });
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
            Amount
          </label>
          <input type='text' className='form-control' id='amount' name='amount' onChange={handleInputChange} value={formData.priority}/>
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <input type='text' className='form-control' id='category' name='category' onChange={handleInputChange} value={formData.task}/>
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input type='text' className='form-control' id='description' name='description' onChange={handleInputChange} value={formData.description}/>
        </div>

        <div className='mb-3 mt-3'>
          <label htmlFor='is_income' className='form-label'>
            Income?
          </label>
          <input type='checkbox' id='is_income' name='is_income' onChange={handleInputChange} value={formData.completion_status}/>
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


      completion_status: false,
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
          {transactions.map((transaction) =>(
            <tr key={transaction.id}>
              <td>{transaction.priority}</td>
              <td>{transaction.task}</td>
              <td>{transaction.description}</td>
              <td>{transaction.completion_status? 'Yes' : 'No'}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>

      </table>



    </div>


    </div>
  )

}

export default App;
