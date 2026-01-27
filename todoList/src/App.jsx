
import styles from './App.module.css'
import { TodoForm } from './components/TodoForm/TodoForm.jsx'
import { TodoList } from './components/TodoList/TodoList.jsx'
import { TodoFilter } from './components/TodoFilter/TodoFilter.jsx';
import { useTodos } from './hooks/todos.js';
import { Alert } from './components/Alert/alert.jsx';
import {Loader} from './components/Loader/Loader.jsx';

function App() {

  const todos= useTodos();

  return (
    <div className={styles.App}>
      {JSON.stringify(todos.isLoading)}
      <header className={styles.Header}>
        <img className={styles.Logo} src='public/to-do.png' />
        <h2 className={styles.Title}>Todo List</h2>
      </header>
      <div className={styles.AppContainer}>
        {todos.isLoading && <Loader/>}
        {
          !!todos.errors.message && (
                 <Alert onClear={()=> todos.errors.clear()}>
                  {todos.errors.message}
                </Alert>
          )
        }
        <TodoForm onCreate={todos.create} />
        <TodoFilter onFilter={todos.filters} />
        <TodoList todos={todos.data} onUpdate={todos.update} onDelete={todos.delete} />
      </div>

    </div>
  )
}

export default App
