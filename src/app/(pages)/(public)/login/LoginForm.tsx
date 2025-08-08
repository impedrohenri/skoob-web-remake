"use client";

import { useRouter } from 'next/navigation';
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import styles from './login.module.css';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('/api/login-skoob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const resp = await res.json();

      if (resp.status === 'logged') {
        const tokenExpires = new Date();
        tokenExpires.setSeconds(tokenExpires.getSeconds() + resp.response.expires_in);

        document.cookie = `user_id=${resp.response.id}; expires=Tue, 19 Jan 2038 04:14:06 GMT; path=/`;
        document.cookie = `user_token=${resp.response.token}; expires=${tokenExpires.toUTCString()}; path=/`;
        document.cookie = `user_refresh_token=${resp.response.refresh_token}; expires=Tue, 19 Jan 2038 04:14:06 GMT; path=/`;
        document.cookie = `user_foto=${resp.response.foto}; expires=Tue, 19 Jan 2038 04:14:06 GMT; path=/`;

        router.push('/');
      } else {
        alert('Login falhou');
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input type='text' name='email' placeholder='Nome de usuário ou e-mail' />
      <Input type='password' name='password' placeholder='Senha' />
      <Button type='submit' value='Avançar' model="model-1" />
    </form>
  );
}
