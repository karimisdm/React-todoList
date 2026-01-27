import styles from './alert.module.css';
export function Alert({children, onClear}){
    return(
        <div className={styles.Alert}>
            {children}
            <span onClick={onClear}>*</span>

        </div>
    )
}