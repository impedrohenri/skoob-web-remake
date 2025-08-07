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

        const formElements = new FormData(event.currentTarget);
        const userEmail = formElements.get('userEmail') as string;
        const password = formElements.get('password') as string;

        const formData = new URLSearchParams();
        formData.append('data[Usuario][email]', userEmail);
        formData.append('data[Usuario][senha]', password);
        formData.append('data[Login][automatico]', 'true');

        try {
            const res = await fetch('/api/login-skoob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            });

            const result = await res.json();

            const redirectURL: string = result.redirectTo

            if (redirectURL.startsWith('https://www.skoob.com.br/usuario/')) {
                
                const id = redirectURL.split('/').at(-1)?.split('-')[0] || ''
                setUserId(id);
                localStorage.setItem('user@id', id)

                document.cookie = `user_id=${id}; path=/`

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

                        <Input type='text' name='userEmail' placeholder='Nome de usuário ou e-mail' />
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