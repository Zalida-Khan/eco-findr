import styles from './Chips.module.css'

export default function Chips({ buttonText }) {
    return (
        <>
            <button type="submit" className={styles.chipCard}>
                {buttonText}
            </button>
        </>
    )
    
}
