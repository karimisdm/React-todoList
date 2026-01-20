import styles from './TodoFormField.module.css';
import { Default_PRIORITY, PRIORITIES } from '../../constants/priorities';

export function TodoFormField({ todo = {}, showFields = true, register, errors = {} }) {

    return (
        <div className={styles.FormFields}>
            <div className={styles.FormField}>
                <input type="text" placeholder="Name" autoComplete="off"
                    aria-invalid={!!errors.name} defaultValue={todo.name}
                    {...register('name')} />
                {!!errors.name &&
                    <span className={styles.FormFieldError}>
                        {errors.name.message}
                    </span>
                }
            </div>
            {showFields && <>
                <div className={styles.FormField}>
                    <textarea type="text" placeholder="Description" rows="3" defaultValue={todo.description}
                        aria-invalid={!!errors.description} {...register('description')} />
                    {!!errors.description &&
                        <span className={styles.FormFieldError}>
                            {errors.description.message}
                        </span>}
                </div>
                <div className={styles.FormGroup}>
                    <div className={styles.FormField}>
                        <label htmlFor="deadline">Deadline</label>
                        <input id="deadline" type="date" defaultValue={todo.deadline}
                            aria-invalid={!!errors.deadline}
                            {...register('deadline')} />
                        {!!errors.deadline &&
                            <span className={styles.FormFieldError}>
                                {errors.deadline.message}
                            </span>
                        }
                    </div>
                    <div className={styles.FormField}>
                        <label htmlFor="priority">Priority</label>
                        <select id="priority" defaultValue={todo.priority ?? Default_PRIORITY} {...register('priority')}
                            aria-invalid={!!errors.priority}>
                            {
                                Object.keys(PRIORITIES).map((key) => (
                                    <option key={key} value={key}>{PRIORITIES[key].label}</option>
                                ))
                            }

                        </select>
                        {!!errors.priority &&
                            <span className={styles.FormFieldError}>
                                {errors.priority.message}
                            </span>
                        }

                    </div>
                </div>


            </>}


        </div>
    )
}