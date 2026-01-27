import styles from './loader.module.css';


export function Loader(){
    return(
        <div className={styles.Backdrop}>
            <div className={styles.Loader}>

            </div>
        </div>
    )
}