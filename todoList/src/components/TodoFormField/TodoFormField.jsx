import styles from './TodoFormField.module.css';
import { Default_PRIORITY, PRIORITIES } from '../../constants/priorities';

export function TodoFormField({todo={},showFields=true}) {
    return (
        <div className={styles.FormFields}>
            <div className={styles.FormField}>
                <input type="text" name='name' placeholder="Name" autoComplete="off" defaultValue={todo.name} />
            </div>
            {showFields && <>
                <div className={styles.FormField}>
                    <textarea type="text" name='description' placeholder="Description" rows="3" defaultValue={todo.description} />
                </div>
                <div className={styles.FormGroup}>
                    <div className={styles.FormField}>
                        <label htmlFor="deadline">Deadline</label>
                        <input id="deadline" type="date" name='deadline' defaultValue={todo.deadline} />
                    </div>
                    <div className={styles.FormField}>
                        <label htmlFor="priority">Priority</label>
                        <select id="priority" name='priority' defaultValue={todo.priority ?? Default_PRIORITY}>
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