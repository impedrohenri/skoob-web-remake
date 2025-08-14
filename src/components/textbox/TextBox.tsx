import styles from './TextBox.module.css'

interface IProps{
    [key: string]: string;
}

export default function TextBox({...props}: IProps){

    return (
        <textarea {...props} className={`${styles.textbox} ${props.className} rounded-2xl`} ></textarea>
    )
}