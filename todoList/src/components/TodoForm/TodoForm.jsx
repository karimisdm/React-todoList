import { useState } from 'react'
import {useForm} from 'react-hook-form'
import styles from './TodoForm.module.css'
import { Default_PRIORITY, PRIORITIES } from '../../constants/priorities';
import { TodoFormField } from '../TodoFormField/TodoFormField';

export function TodoForm({onCreate}){
    const [showFields, setShowFields] = useState(true);
    const {register,handleSubmit, reset}= useForm({
        defaultValues:{
            description:'',
            deadline:'',
            priority:Default_PRIORITY,
            completed:false
        }
    });

    function handleCreate(data){
        onCreate(data);
        reset();
    };
    
  
    return(
        <section>
            <h3 className={styles.Title} >New To-Do
                <button onClick={()=> {setShowFields(!showFields)}}>
                    {showFields?'Hide':'Show'} all fields</button>
            </h3>
            <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
                <TodoFormField showFields={showFields} register={register}/>

                <input type="submit" value="Add"/>

            </form>
        </section>
    )
}