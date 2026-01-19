import styles from './TodoFormField.module.css';
import { Default_PRIORITY, PRIORITIES } from '../../constants/priorities';

export function TodoFormField({todo={},showFields=true, register, errors={}}) {
    return (
        <div className={styles.FormFields}>
            <div className={styles.FormField}>
                <input type="text" placeholder="Name" autoComplete="off" defaultValue={todo.name}
                 {...register('name',{required:'Name is required',
                  minLength:{
                    value:3,
                    message: 'Name must be at least 3 characters long'
                  },
                  maxLength:{
                    value:50,
                    message:'Name must be at most 50 characters long'
                  }
                  })}/>
                  {!!errors.name && errors.name.message}
            </div>
            {showFields && <>
                <div className={styles.FormField}>
                    <textarea type="text" placeholder="Description" rows="3" defaultValue={todo.description}
                       {...register('description',
                         {maxLength:{
                            value:200,
                            message:'Description must be at most 200 characters long'
                         }})}/>
                         {!!errors.description && errors.description.message}
                </div>
                <div className={styles.FormGroup}>
                    <div className={styles.FormField}>
                        <label htmlFor="deadline">Deadline</label>
                        <input id="deadline" type="date" defaultValue={todo.deadline}
                           {...register('deadline',
                             {min:!todo.id &&{
                                value: new Date().toISOString().split('T')[0],
                                message:'Deadline cannot be in the past'
                            } })} />
                              {!!errors.deadline && errors.deadline.message}
                    </div>
                    <div className={styles.FormField}>
                        <label htmlFor="priority">Priority</label>
                        <select id="priority" {...register('priority',{
                            validate: (value)=> Object.keys(PRIORITIES).includes(value),
                            message:'Invalid priority selected'
                        })}
                         defaultValue={todo.priority ?? Default_PRIORITY}>
                            {
                                Object.keys(PRIORITIES).map((key) => (
                                    <option key={key} value={key}>{PRIORITIES[key].label}</option>
                                ))
                            }
                        </select>
                          {!!errors.priority && errors.priority.message}

                    </div>
                </div>


            </>}


        </div>
    )
}