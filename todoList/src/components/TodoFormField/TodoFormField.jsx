import styles from './TodoFormField.module.css';
import { Default_PRIORITY, PRIORITIES } from '../../constants/priorities';

export function TodoFormField({todo={},showFields=true, register}) {
    return (
        <div className={styles.FormFields}>
            <div className={styles.FormField}>
                <input type="text" placeholder="Name" autoComplete="off" defaultValue={todo.name}
                 {...register('name',{required:true, minLength:3, maxLength:30})}/>
            </div>
            {showFields && <>
                <div className={styles.FormField}>
                    <textarea type="text" placeholder="Description" rows="3" defaultValue={todo.description}
                       {...register('description', {maxLength:200})}/>
                </div>
                <div className={styles.FormGroup}>
                    <div className={styles.FormField}>
                        <label htmlFor="deadline">Deadline</label>
                        <input id="deadline" type="date" defaultValue={todo.deadline}
                           {...register('deadline', {min:new Date().toISOString().split('T')[0] })} />
                    </div>
                    <div className={styles.FormField}>
                        <label htmlFor="priority">Priority</label>
                        <select id="priority" {...register('priority')} defaultValue={todo.priority ?? Default_PRIORITY}>
                            {
                                Object.keys(PRIORITIES).map((key) => (
                                    <option key={key} value={key}>{PRIORITIES[key].label}</option>
                                ))
                            }
                        </select>

                    </div>
                </div>


            </>}


        </div>
    )
}