import styles from './App.module.css'
import { TodoForm } from './components/TodoForm'

function App() {
  

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='public/to-do.png'/>
        <h2 className={styles.Title}>Todo List</h2>
      </header>
      <div className={styles.AppContainer}>
        <TodoForm/>
      </div>
    </div>
  )
}

export default App
