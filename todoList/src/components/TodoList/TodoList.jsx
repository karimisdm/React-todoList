import styles from './TodoList.module.css';
import { PRIORITIES, Default_PRIORITY } from '../../constants/priorities';

export function TodoList({ todos }) {
    return (
        <section>
            <h3>To-Dos</h3>
            <ul className={styles.TodoList}>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.TodoListItem} data-completed={todo.completed}>
                        <div className={styles.Content}>
                            <input type="checkbox" name="completed" defaultChecked={todo.completed} className={styles.Status} />
                            <div className={styles.Info}>
                                {todo.name}
                                {todo.description && <span className={styles.Description}>{todo.description}</span>}
                                <div className={styles.AdditionalInfo}>
                                    {todo.deadline}
                                    {todo.priority !== 'None' && (
                                        <span style={{color:PRIORITIES[todo.priority.toLowerCase()].color}}>
                                            {PRIORITIES[todo.priority.toLowerCase()].label}
                                        </span>
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}