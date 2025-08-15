import { ReactNode } from "react";
import styles from "./section.module.css";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function Section({className, children}: Props) {
  return (
  <section className={`${styles.section} ${className}`}>{children}</section>
  )
}