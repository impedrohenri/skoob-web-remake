import Button from "@/components/button/button";
import Section from "@/components/section/Section";
import { ThemeSelector } from "@/components/themeMode/themeMode";

import Link from "next/link";

interface InfoParams{
    params:Promise<{
        idUsuario: string;
    }>;
}

export default async function Profile({params}: InfoParams){
    const {idUsuario} = await params;


    return(
        <>
            <p className="primary-content"><strong className="secondary-content">PROFILE</strong> page</p>
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