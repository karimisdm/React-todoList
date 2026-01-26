import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { TodoForm } from './components/TodoForm/TodoForm.jsx'
import { TodoList } from './components/TodoList/TodoList.jsx'
import { TodoFilter } from './components/TodoFilter/TodoFilter.jsx';

function App() {

  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  function fetchTodos() {
    fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((todos) => {
        setTodos(todos);
      })
  };

  useEffect(() => {
    fetchTodos();
  }, [])

  function handleCreate(newTodo) {
    fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(fetchTodos)
  };

  function handleUpdate(id, updatedTodo) {
     fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedTodo)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(fetchTodos)
  };

  function handleDelete(id) {
     fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos/${id}`, {
      method: 'DELETE'
    })
      .then((response) => !!response.ok && response.json())
      .then(fetchTodos)
  };

  function filterTodos(todo) {
    const { completed, priority } = filters;

    return (
      (completed === '' || todo.completed === completed) &&
      (priority === '' || todo.priority === priority)
    )

  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='public/to-do.png' />
        <h2 className={styles.Title}>Todo List</h2>
      </header>
      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoFilter onFilter={setFilters} />
        <TodoList todos={todos.filter(filterTodos)} onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>

    </div>
  )
}

export default App
