import { useState } from 'react';
import styles from './TodoForm.module.css'
import { Default_PRIORITY, PRIORITIES } from '../../constants/priorities';
import { TodoFormField } from '../TodoFormField/TodoFormField';

export function TodoForm({onCreate}){
    const [showFields, setShowFields] = useState(true);

    function handleSubmit(e){
         e.preventDefault();

        const {elements}= e.target;
        if(elements.name.value==='') return;
       
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
                <TodoFormField showFields={showFields}/>

                <input type="submit" value="Add"/>

            </form>
        </section>
    )
}