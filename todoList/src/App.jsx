import { useState } from 'react'
import styles from './App.module.css'
import { TodoForm } from './components/TodoForm/TodoForm.jsx'
import { TodoList } from './components/TodoList/TodoList.jsx'

function App() {

  const ToDos_Default = [
    {id: '1', name: 'Learn React', description: 'Study the React library and build projects.', deadline:'2024-12-14', priority:'High',completed:false},
    {id: '2', name: 'Grocery Shopping', description: 'Buy fruits, vegetables, and other essentials.', deadline:'2024-12-15', priority:'Medium',completed:false},
    {id: '3', name: 'Workout', description: 'Go for a run or hit the gym for a workout session.', deadline:'2024-12-16', priority:'Low',completed:true},
    {id: '4', name: 'Read Book',description:'', deadline:'',priority:'None',completed:false},

  ];
  const [todos, setTodos]= useState(ToDos_Default);

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
        <TodoList todos={todos}/>
      </div>
      
    </div>
  )
}

export default App
