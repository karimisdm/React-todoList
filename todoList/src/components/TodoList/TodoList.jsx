import styles from './TodoList.module.css';
import {TodoListItem} from '../TodoListItems/TodoListItem.jsx';

export function TodoList({ todos, onUpdate, onDelete}) {
    return (
        <section>
            <h3>To-Dos</h3>
             {!todos.length && <p>You do not have any todos yet.</p>}    
            <ul className={styles.TodoList}>
                {todos.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
            </ul>
        </section>
    )
}