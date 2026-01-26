import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { TodoForm } from './components/TodoForm/TodoForm.jsx'
import { TodoList } from './components/TodoList/TodoList.jsx'
import { TodoFilter } from './components/TodoFilter/TodoFilter.jsx';

function App() {

  const [todos, setTodos]= useState([]);
  const [filters, setFilters] = useState({});

  function fetchTodos(){
    fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos`, {
      method: 'GET',
      headers:{'content-type': 'application/json'},
    })
     .then((response)=>{
       if(response.ok){
        return response.json();
       }
        })
          .then((todos)=>{
          setTodos(todos);
     })
  };

  useEffect(()=>{
    fetchTodos();
  }, [])

  function handleCreate(newTodo){
    setTodos((prevTodos)=> [...prevTodos, {...newTodo, id:`${prevTodos.length + 1}`}]);
  };
  function handleUpdate(id,updatedTodo){
    setTodos((prevTodos)=> prevTodos.map((todo)=> todo.id === id ? updatedTodo : todo));
  };
  function handleDelete(id){
    setTodos((prevTodos)=> prevTodos.filter((todo)=> todo.id !== id));
  };

  function filterTodos(todo){
    const {completed, priority}= filters;
    
    return(
      (completed==='' || todo.completed === completed )&&
      (priority==='' || todo.priority === priority)
    )

  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='public/to-do.png'/>
        <h2 className={styles.Title}>Todo List</h2>
      </header>
      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate}/>
        <TodoFilter onFilter={setFilters}/>
        <TodoList todos={todos.filter(filterTodos)} onUpdate={handleUpdate} onDelete={handleDelete}/>
      </div>
      
    </div>
  )
}

export default App
