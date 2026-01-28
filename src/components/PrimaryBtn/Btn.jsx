import styles from './PrimaryBtn.module.css'

export default function Btn({children,color="white"}) {
    return(
        <button className={styles.btn} style={{backgroundColor:`${color}`}}>{children}</button>
    )
}