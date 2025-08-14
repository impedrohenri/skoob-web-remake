'use client'

import Input from "@/components/input/input";
import Section from "@/components/section/Section";
import styles from './register.module.css'
import Button from "@/components/button/button";
import apiRouter from "@/app/utils/apiRoute";
import { useRouter } from "next/navigation";



export default function Register(){
    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data)

        fetch(`${apiRouter}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res.status)
            return res.json()})
        .then(() => {
            router.push('/login')
        }).catch((err) => {
            console.log(err.error)
        })
    }

    return (
        <>
            <Section>
                <div>
                    <form action="" id="formCadastro" onSubmit={handleSubmit} className={styles.form}>
                        <Input type='text' name='name' placeholder='Nome e Sobrenome'  />
                        <Input type='text' name='user' placeholder='@ usuário'  />
                        <Input type='text' name='email' placeholder='E-mail'  />
                        {/* <Input type='text' name='confirmEmail' placeholder='Confirmal e-mail'  /> */}
                        <Input type='password' name='password' placeholder='Senha'/>
                        <Input type='password' name='confirmPassword' placeholder='Confirmar Senha'/>
                        <Button type='submit' value='Avançar'>Avançar</Button> 
                    </form>
                </div>
            </Section>
        </>
    )
}