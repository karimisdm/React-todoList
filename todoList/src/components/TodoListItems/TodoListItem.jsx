import styles from './TodoListItem.module.css';
import { PRIORITIES } from '../../constants/priorities';


export function TodoListItem({ todo, onUpdate }) {

    function handleChanges(event){
        onUpdate({...todo, completed:event.target.checked});

    }


    return (
        <li className={styles.TodoListItem} data-completed={todo.completed}>
            <div className={styles.Content}>
                <input type="checkbox" name="completed" checked={todo.completed} onChange={handleChanges} className={styles.Status} />
                <div className={styles.Info}>
                    {todo.name}
                    {todo.description && <span className={styles.Description}>{todo.description}</span>}
                    <div className={styles.AdditionalInfo}>
                        {todo.deadline}
                        {todo.priority !== 'None' && (
                            <span style={{ color: PRIORITIES[todo.priority.toLowerCase()].color }}>
                                {PRIORITIES[todo.priority.toLowerCase()].label}
                            </span>
                        )
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}