import styles from './TodoListItem.module.css';
import { PRIORITIES } from '../../constants/priorities';
import { useState } from 'react';
import { TodoFormField } from '../TodoFormField/TodoFormField';
import { Default_PRIORITY } from '../../constants/priorities';


export function TodoListItem({ todo, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleChanges(event) {
        onUpdate(todo.id, { ...todo, completed: event.target.checked });

    };

    function handleEdit(e) {
        e.preventDefault();

        const { elements } = e.target;
        if (elements.name.value === '') return;
        onUpdate(todo.id, {
            name: elements.name.value,
            description: elements.description.value,
            deadline: elements.deadline.value,
            priority: elements.priority.value,
            completed: todo.completed,
            id: todo.id,
        });
        setIsEditing(false);

    }

    const viewMode = (
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
            <div className={styles.Controls}>
                <button onClick={() => setIsEditing(!isEditing)}>📝</button>
            </div>
        </div>
    );
    const editMode = (
        <form className={styles.Content} onReset={() => setIsEditing(false)} onSubmit={handleEdit}>
            <TodoFormField todo={todo} />
            <div className={styles.Controls}>
                <input type='submit' value='💾' />
                <input type='reset' value='❌' />
            </div>
        </form>
    );


    return (
        <li className={styles.TodoListItem} data-completed={todo.completed}>
            {
                isEditing ? editMode : viewMode
            }


        </li>
    )
}