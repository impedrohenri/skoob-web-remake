import { getCookieString } from "@/app/utils/getCookieString";
import Button from "@/components/button/button";
import Section from "@/components/section/Section";
import { ThemeSelector } from "@/components/themeMode/themeMode";

import Link from "next/link";
import { cache } from "react";

interface InfoParams{
    params:Promise<{
        idUsuario: string;
    }>;
}

const getUser = cache(async (id: string) => {
    const res = await fetch(`http://localhost:3000/api?url=/user/show/?user_id=${id}`, {
        headers:{
            cookie: await getCookieString(),
        }
    })
    const resp = await res.json();

    return resp.response;
});

export async function generateMetadata({params}:InfoParams) {
    const {idUsuario} = await params;
    const res = await getUser(idUsuario)
    
    return {
        title: `${res.nome} - Perfil`
    }

}

export default async function Profile({params}: InfoParams){
    const {idUsuario} = await params;

    const user = await getUser(idUsuario);

    return(
        <>
            <p className="primary-content"><strong className="secondary-content">PROFILE</strong> page of <strong className="secondary-content">{user.nome}</strong></p>
            <br />
            {idUsuario}
            <ThemeSelector display="*"/>
            <Section>
                <Link href='/'><Button value='Home' model=""/></Link>
                <Link href='/login'><Button value='Sair' model='model-2' className='type-2'/></Link>
            </Section>

        </>
    )
}