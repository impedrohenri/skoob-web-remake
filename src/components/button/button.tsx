import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css'

interface Props  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({children, variant, ...props}: Props){
    return (
      <button {...props} className={`${styles.btn} ${variant && styles[variant]}`}>{children}</button>
    )
}