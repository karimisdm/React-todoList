import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { TodoForm } from './components/TodoForm/TodoForm.jsx'
import { TodoList } from './components/TodoList/TodoList.jsx'
import { TodoFilter } from './components/TodoFilter/TodoFilter.jsx';
import { api } from './api.js';

function App() {

  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});

  function fetchTodos() {
     api.todos.getAll(filters).then((todos) => {
        setTodos(todos);
      })
  };

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  function handleCreate(newTodo) {
      api.todos.create(newTodo).then(fetchTodos)
  };

  function handleUpdate(id, updatedTodo) {
      api.todos.update(id, updatedTodo).then(fetchTodos)
  };

  function handleDelete(id) {
      api.todos.delete(id).then(fetchTodos)
  };


  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='public/to-do.png' />
        <h2 className={styles.Title}>Todo List</h2>
      </header>
      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoFilter onFilter={setFilters} />
        <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>

    </div>
  )
}

export default App
