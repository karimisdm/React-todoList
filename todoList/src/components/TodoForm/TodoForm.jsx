import { useState } from 'react';
import styles from './TodoForm.module.css'
import { Default_PRIORITY, PRIORITIES } from '../../constants/priorities';

export function TodoForm({onCreate}){
    const [showFields, setShowFields] = useState(true);

    function handleSubmit(e){
        const {elements}= e.target;
        e.preventDefault();
        onCreate({
            name: elements.name.value,
            description: elements.description?.value ?? '',
            deadline: elements.deadline?.value ?? '',
            priority: elements.priority?.value ?? Default_PRIORITY,
            completed: false,
        });
        e.target.reset();
    
    };
  
    return(
        <section>
            <h3 className={styles.Title} >New To-Do
                <button onClick={()=> {setShowFields(!showFields)}}>
                    {showFields?'Hide':'Show'} all fields</button>
            </h3>
            <form className={styles.Form} onSubmit={handleSubmit}>
                <div className={styles.FormFields}>
                    <div className={styles.FormField}>
                        <input type="text" name='name' placeholder="Name" autoComplete="off"/>
                    </div>
                    {showFields && <>
                    <div className={styles.FormField}>
                        <textarea type="text" name='description' placeholder="Description" rows="3"/>
                    </div>
                    <div className={styles.FormGroup}>
                        <div className={styles.FormField}>
                            <label htmlFor="deadline">Deadline</label>
                            <input id="deadline" type="date" name='deadline'/>
                        </div>
                        <div className={styles.FormField}>
                            <label htmlFor="priority">Priority</label>
                            <select id="priority" defaultValue={Default_PRIORITY} name='priority'>
                                {
                                    Object.keys(PRIORITIES).map((key)=>(
                                        <option key={key} value={key}>{PRIORITIES[key].label}</option>
                                    ))
                                }
                            </select>
                            
                        </div>
                    </div>
                  

                    </>}
                    
                  
                </div>

                <input type="submit" value="Add"/>

            </form>
        </section>
    )
}