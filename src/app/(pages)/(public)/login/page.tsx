'use client'

import styles from './login.module.css'
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import Section from "@/components/section/Section";
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '@/app/contexts/AuthContext';


export default function Login() {
    const router = useRouter()

  const { setUserId, setUserData } = useContext(AuthContext);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        console.log(data)

        try {
            const res = await fetch('/api/login-skoob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const resp = await res.json();

            console.log(resp)
            

            if (resp.status === 'logged') {
                
                const id = resp.response.id
                setUserId(id);

                document.cookie = `user_id=${id}; path=/`
                document.cookie = `user_token=${resp.response.token}; path=/`
                document.cookie = `user_refresh_token=${resp.response.refresh_token}; path=/`
                document.cookie = `user_foto=${resp.response.foto}; path=/`

                router.push('/');
            } else {
                alert('Login falhou ou redirecionamento ausente');
            }
        } catch (err) {
            console.error('Erro ao fazer login:', err);
        }
    };


    return (
        <>
            <Section>
                <div>
                    <form action="" onSubmit={handleSubmit} className={styles.form}>

                        <Input type='text' name='email' placeholder='Nome de usuário ou e-mail' />
                        <Input type='password' name='password' placeholder='Senha' />
                        <Button type='submit' value='Avançar' model="model-1" />
                    </form>
                </div>
            </Section>
            <Link href='/cadastro'>Cadastre-se</Link>

            <div>
                exB69.kaY6SH*@V
            </div>
        </>
    )
}