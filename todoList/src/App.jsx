
import styles from './App.module.css'

function App() {
  

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img className={styles.logo}/>
        <h2 className={styles.title}>Todo List</h2>
      </header>
      <div className={styles.content}>Content</div>
    </div>
  )
}

export default App
