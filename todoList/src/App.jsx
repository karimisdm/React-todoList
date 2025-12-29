import { useState } from 'react'
import styles from './App.module.css'
import { TodoForm } from './components/TodoForm'

function App() {
  const [todos, setTodos]= useState([]);
  function handleCreate(newTodo){
    setTodos((prevTodos)=> [...prevTodos, {...newTodo, id:`${prevTodos.length + 1}`}]);
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='public/to-do.png'/>
        <h2 className={styles.Title}>Todo List</h2>
      </header>
      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate}/>
        {JSON.stringify(todos)}
      </div>
      
    </div>
  )
}

export default App
