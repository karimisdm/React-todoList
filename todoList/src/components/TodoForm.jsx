import styles from './TodoForm.module.css'

export function TodoForm(){
    return(
        <section>
            <h3 className={styles.Title} >New To-Do</h3>
            <form className={styles.Form}>
                <div className={styles.FormFields}>
                    <div className={styles.FormField}>
                        <input type="text" placeholder="Name" autoComplete="off"/>
                    </div>
                    <div className={styles.FormField}>
                        <textarea type="text" placeholder="Description" rows="3"/>
                    </div>
                    <div className={styles.FormGroup}>
                        <div className={styles.FormField}>
                            <label htmlFor="deadline">Deadline</label>
                            <input id="deadline" type="date"/>
                        </div>
                        <div className={styles.FormField}>
                            <label htmlFor="priority">Priority</label>
                            <select id="priority" defaultValue="None">
                                    <option value="None">None</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                            </select>
                            
                        </div>
                    </div>
                  
                  
                </div>

                <input type="submit" value="Add"/>

            </form>
        </section>
    )
}