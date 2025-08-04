import styles from './input.module.css'

interface Props{
    
    [key: string]: string
}

export default function Input({...props}: Props){
    return (

            <input {...props} className={styles.input} />
        
    )
}