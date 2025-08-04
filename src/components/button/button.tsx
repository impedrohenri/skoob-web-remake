import styles from './button.module.css'

interface Props {
  model: string;
  [key: string]: string
}

export default function Button({model, ...props}: Props){
    return (
      <button {...props} className={`${styles.btn} ${model && styles[model]}`}>{props.value}</button>
    )
}