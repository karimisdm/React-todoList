import styles from './TodoListItem.module.css';
import { PRIORITIES } from '../../constants/priorities';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TodoFormField } from '../TodoFormField/TodoFormField';
import { Default_PRIORITY } from '../../constants/priorities';
import {yupResolver} from '@hookform/resolvers/yup';
import { getTodoSchema } from '../../schemas/todo';


export function TodoListItem({ todo, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver: yupResolver(getTodoSchema()),
        defaultValues: todo});

    function handleChanges(event) {
        onUpdate(todo.id, { ...todo, completed: event.target.checked });

    };

    function handleEdit(data) {
        onUpdate(todo.id, data);
        setIsEditing(false);

    };
   

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
                <button onClick={() => onDelete(todo.id)}>🗑️</button>
            </div>
        </div>
    );
    const editMode = (
        <form className={styles.Content} onReset={() => setIsEditing(false)} onSubmit={handleSubmit(handleEdit)}>
            <TodoFormField todo={todo} register={register} errors={errors}/>
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