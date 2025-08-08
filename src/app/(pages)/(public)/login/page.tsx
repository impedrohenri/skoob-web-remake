import { Metadata } from 'next';
import Section from "@/components/section/Section";
import Link from 'next/link';
import LoginForm from './LoginForm';
import styles from './login.module.css';

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <>
      <Section>
        <div className={styles.form}>
          <LoginForm />
        </div>
      </Section>
      <Link href='/cadastro'>Cadastre-se</Link>
      <div>exB69.kaY6SH*@V</div>
    </>
  );
}